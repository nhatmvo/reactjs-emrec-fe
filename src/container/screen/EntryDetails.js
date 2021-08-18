import classes from './EntryDetails.module.scss';
import useHttp from '../../hooks/use-http';
import { getTemplate } from '../../services/api/template'
import { getPatientById } from '../../services/api/patient'
import { getEntryData } from '../../services/api/document';

import { useEffect } from 'react';
import { useParams } from 'react-router';
import moment from 'moment';

import Section from '../../components/UI/Section'
import Textarea from '../../components/UI/Textarea'
import Header from '../../components/UI/Header';
import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import InformationCard from '../../components/Patient/InformationCard';
import FileInput from '../../components/UI/FileInput';

const EntryDetails = () => {
    const { sendRequest: sendGetPatientRequest, status: getPatientStatus, data: patientData  } = useHttp(getPatientById, true);
    const { sendRequest: sendGetTemplateRequest, status: getTemplateStatus, data: templateData } = useHttp(getTemplate, true);
    const { sendRequest: sendGetEntryDataRequest, status: getEntryDataStatus, data: entryData } = useHttp(getEntryData, true);
    const params = useParams();
    const { patientId, entryId } = params;

    useEffect(async () => {
        await sendGetPatientRequest(patientId);
        await sendGetTemplateRequest();
        await sendGetEntryDataRequest(entryId);
    }, [sendGetPatientRequest, sendGetTemplateRequest, patientId]);

    if (getPatientStatus === 'pending' || getTemplateStatus === 'pending' || getEntryDataStatus === 'pending') {
        return (<div>
            Loading...
        </div>)
    }

    const populateForm = (elements, elementValues) => {
        elements.sort((a, b) => { return a.priority - b.priority });
        let builder = [];
        elements.forEach(element => {
            let childElements = [];
            if (element.childElements != null && element.childElements.length !== 0) {
                childElements = populateForm(element.childElements, elementValues)
            }
            switch (element.elementTypeId) {
                case 1:
                    builder.push(<Section label={element.name}>{childElements}</Section>)
                    break;
                case 2:
                    builder.push(<Header label={element.name}>{childElements}</Header>)
                    break;
                case 3:
                    let currentElem = elementValues.find(e => e.elementId == element.id);
                    let textValue = currentElem != null ? currentElem.values[0] : "";
                    builder.push(<Textarea label={element.name} id={element.id} value={textValue} readonly={true}/>)
                    break;
                case 4:
                    let currentInputElem = elementValues.find(e => e.elementId == element.id);
                    let inputValues = currentInputElem != undefined ? currentInputElem.values[0] : "";
                    builder.push(<Input className={classes["col-12"]} label={element.name} id={element.id} value={inputValues} readonly={true}/>)
                    break;
                case 5:
                    let currentFileElem = elementValues.find(e => e.elementId == element.id);
                    let fileUris = currentFileElem != undefined ? currentFileElem.values : [];
                    builder.push(<FileInput className={classes["col-12"]} label={element.name} id={element.id} value={fileUris} readonly={true}/>)
                    break;
                default:
                    break;
            }
        });
        return builder;
    }
    const form = populateForm(templateData.elements, entryData.elementValues);

    return (
        <div className={classes.wrapper}>
            <InformationCard className={classes.card}
                name={patientData.name}
                yearOfBirth={patientData.yearOfBirth}
                phoneNumber={patientData.phoneNumber}
                gender={patientData.gender} />
            <Card headerLabel={moment(entryData.entryDate).format("DD/MM/yyyy")} priorEntry={entryData.priorDocumentEntry} succeedingEntry={entryData.succeedingDocumentEntry}>
                <div className={classes.form}>
                    {form}
                    <Button className={classes.btn}>Sửa thông tin</Button>
                </div>
            </Card>
        </div>
    );
}

export default EntryDetails;