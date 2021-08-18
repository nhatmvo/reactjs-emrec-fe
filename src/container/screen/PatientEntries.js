import classes from './PatientEntries.module.scss';
import InformationCard from '../../components/Patient/InformationCard';
import EntrySummaryCard from '../../components/Entry/EntrySummaryCard';
import Button from '../../components/UI/Button';
import Dropdownlist from '../../components/UI/Dropdownlist';

import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { getPatientEntries } from '../../services/api/patient';
import useHttp from '../../hooks/use-http';
import moment from 'moment';

const PatientEntries = (props) => {
    const { sendRequest, status, data } = useHttp(getPatientEntries, true);
    const params = useParams();
    const history = useHistory();

    const { patientId } = params;

    useEffect(() => {
        sendRequest(patientId);
    }, [sendRequest, patientId]);

    const addEntryHandler = () => {
        history.push('entries/add');
    }

    if (status === 'pending') {
        return (<div>
            {/* TODO: Add loading spinner component when data loading */}
            Loading...
        </div>)
    }

    const handleOnCardClick = (entryId, event) => {
        history.push(`entries/${entryId}/details`)
    }

    return (
        <div className={classes.wrapper}>
            <InformationCard name={data.name} yearOfBirth={moment(data.dateOfBirth).format("yyyy")} phoneNumber={data.phoneNumber} gender={data.gender} id={data.patientId} />
            <div className={classes.controls}>
                <Button className={classes.button} onClick={addEntryHandler}><span className={classes.cross}>+</span>&nbsp;&nbsp;Thêm bản ghi</Button>
                {/* <Dropdownlist className={classes.dropdown}></Dropdownlist> */}
            </div>
            {data.patientEntries.map(entry => <EntrySummaryCard
                diagnostic={entry.mainEntryValue}
                entryTotalPictures={entry.entryTotalPictures}
                entryDate={moment(entry.entryDate).format("DD/MM/yyyy - HH:mm:ss")}
                onCardClick={handleOnCardClick.bind(null, entry.entryId)}
                id={entry.entryId}
                />)}
        </div >
    )
};

export default PatientEntries;