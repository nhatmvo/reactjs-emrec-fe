import classes from './AddEntry.module.scss';
import useHttp from '../../hooks/use-http';
import { getTemplate } from '../../services/api/template'
import { getPatientById } from '../../services/api/patient'
import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Section from '../../components/UI/Section'
import Textarea from '../../components/UI/Textarea'
import Header from '../../components/UI/Header';
import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Button from '../../components/UI/Button';
import InformationCard from '../../components/Patient/InformationCard';
import FileInput from '../../components/UI/FileInput';
import { submitForm } from '../../services/api/document';
import { useHistory } from 'react-router-dom';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

const AddEntry = () => {
    const [formData, setFormData] = useState([]);

    const { sendRequest: sendGetPatientRequest, status: getPatientStatus, data: patientData } = useHttp(getPatientById, true);
    const { sendRequest: sendGetTemplateRequest, status: getTemplateStatus, data: templateData } = useHttp(getTemplate, true);
    const { sendRequest: sendSubmitFormRequest, status: submitFormStatus } = useHttp(submitForm);

    const params = useParams();
    const { patientId } = params;
    const history = useHistory();

    useEffect(() => {
        async function fetchData() {
            await sendGetPatientRequest(patientId);
            await sendGetTemplateRequest();
        }
        fetchData();
    }, [sendGetPatientRequest, sendGetTemplateRequest, patientId])

    useEffect(() => {
        if (submitFormStatus === 'completed') {
            history.push(`/patient/${patientId}/entries`)
        }
    }, [submitFormStatus, patientId, history]);

    const handleChangeInputFile = (elementId, elementTypeId, fileList) => {
        setFormData({ ...formData, [elementId]: { typeId: elementTypeId, files: fileList } })
    };


    if (getPatientStatus === 'pending' || getTemplateStatus === 'pending') {
        return <LoadingSpinner />
    }

    const onFormSubmission = async (event) => {
        event.preventDefault();
        const submitFormData = new FormData();
        submitFormData.append("patientId", patientId);
        submitFormData.append("documentId", patientData.documentId);
        submitFormData.append("templateId", templateData._id);
        let index = 0;
        for (const [key, value] of Object.entries(formData)) {
            let elementIdKey = `entryDataRequests[${index}].elementId`;
            submitFormData.append(elementIdKey, key);
            if (value.typeId === 5) {
                for (const file of Object.values(value.files)) {
                    let fileValueName = `entryDataRequests[${index}].files`;
                    submitFormData.append(fileValueName, file);
                }
            } else {
                let inputValueName = `entryDataRequests[${index}].values`;
                submitFormData.append(inputValueName, value.input);
            }
            index++;
        }
        for (var key of submitFormData.entries()) {
            console.log(key[0] + ', ' + key[1]);
        }
        await sendSubmitFormRequest(submitFormData);

    }

    const handleChangeValue = (elementId, elementTypeId, event) => {
        setFormData({ ...formData, [elementId]: { typeId: elementTypeId, input: event.target.value } });
    };

    const buildForm = (elements) => {
        elements.sort((a, b) => { return a.priority - b.priority });
        let builder = [];
        elements.forEach(element => {
            let childElements = [];
            if (element.childElements != null && element.childElements.length !== 0) {
                childElements = buildForm(element.childElements)
            }
            switch (element.elementTypeId) {
                case 1:
                    builder.push(<Section key={element.id} label={element.name}>{childElements}</Section>)
                    break;
                case 2:
                    builder.push(<Header key={element.id} label={element.name}>{childElements}</Header>)
                    break;
                case 3:
                    builder.push(<Textarea key={element.id} label={element.name} id={element.id} onChangeValue={handleChangeValue.bind(null, element.id, element.elementTypeId)} />)
                    break;
                case 4:
                    builder.push(<Input key={element.id} className={classes["col-12"]} label={element.name} id={element.id} onChangeValue={handleChangeValue.bind(null, element.id, element.elementTypeId)} />)
                    break;
                case 5:
                    builder.push(<FileInput key={element.id} className={classes["col-12"]} label={element.name} id={element.id} onChangeValue={handleChangeInputFile.bind(null, element.id, element.elementTypeId)} />)
                    break;
                default:
                    break;
            }
        });
        return builder;
    }
    const form = buildForm(templateData.elements);

    return (
        <div className={classes.wrapper}>
            <InformationCard className={classes.card}
                name={patientData.name}
                yearOfBirth={moment(patientData.dateOfBirth).format("yyyy")}
                phoneNumber={patientData.phoneNumber}
                gender={patientData.gender} />
            <Card headerLabel="Lượt khám mới">
                <form onSubmit={onFormSubmission}>
                    {form}
                    <Button className={classes.btn}>Tạo lượt khám</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddEntry;