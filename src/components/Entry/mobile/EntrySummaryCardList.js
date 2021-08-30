import { Fragment } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import useHttp from '../../../hooks/use-http';
import { getPatientEntries } from '../../../services/api/patient';
import LoadingSpinner from '../../UI/LoadingSpinner';
import EntrySummaryCard from './EntrySummaryCard'

const EntrySummaryCardList = () => {
    const { patientId } = useParams();
    const { sendRequest, status, data } = useHttp(getPatientEntries, true);

    useEffect(() => {
        async function fetchData() {
            await sendRequest(patientId);
        };
        fetchData();
    }, [patientId, sendRequest]);

    if (status === 'pending') {
        return <LoadingSpinner />
    }

    return (<Fragment>
        {data.patientEntries.map(e => {
            return <EntrySummaryCard date={e.entryDate} entryName={e.mainEntryValue[0]} key={e.entryId} />
        })}
    </Fragment>);
}

export default EntrySummaryCardList;