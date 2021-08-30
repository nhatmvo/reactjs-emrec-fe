import moment from 'moment';
import { useEffect } from 'react'
import useHttp from '../../hooks/use-http'
import classes from './InformationCardMobile.module.scss'

import entryIco from '../../assets/small-picture.png';
import { useParams } from 'react-router-dom';
import { getPatientById } from '../../services/api/patient';

const InformationCardMobile = () => {
    const {sendRequest, data, status } = useHttp(getPatientById, true);
    const { patientId } = useParams();

    useEffect(() => {
        async function fetchData() {
            await sendRequest(patientId);
        };
        fetchData();
    }, [patientId]);

    if (status === 'pending') {
        return <></>
    }

    return (<div className={classes.card}>
        <div className={classes.information}>
            <div className={classes.name}>{data.name}</div>
            <div className={classes.year}>{moment(data.dateOfBirth).format('yyyy')}</div>
            <div className={classes.identity}>{data.phoneNumber}</div>
        </div>
        <div>
            <div className={classes.entries}>
                <img src={entryIco} alt="entries-ico"/>
                <div>{data.numberOfEntries}</div>
            </div>
        </div>
    </div>)
}

export default InformationCardMobile;