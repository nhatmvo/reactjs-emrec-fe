import moment from 'moment';
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useHttp from '../../../hooks/use-http';
import { getEntryDetails, getImageElements } from '../../../services/api/document';
import LoadingSpinner from '../../UI/LoadingSpinner';
import InputFileCard from '../../UI/mobile/InputFileCard';
import classes from './EntryCard.module.scss';
import arrowIndicator from '../../../assets/arrow.png'

const EntryCard = () => {
    const { entryId, patientId } = useParams();
    const history = useHistory();
    const { sendRequest: sendGetElementsRequest, status: getElementStatus, data } = useHttp(getImageElements, true);
    const { sendRequest: sendGetEntryRequest, status: getEntryStatus, data: entryData } = useHttp(getEntryDetails, true);

    useEffect(() => {
        async function fetchData() {
            await sendGetElementsRequest(entryId);
            await sendGetEntryRequest(entryId);
        };
        fetchData();
    }, [entryId, sendGetElementsRequest, sendGetEntryRequest]);


    if (getElementStatus === 'pending' || getEntryStatus === 'pending') {
        return <LoadingSpinner />
    }

    const handleOnEntryDetailClick = () => {
        history.push(`/patient/${patientId}/entries/${entryId}/details`);
    }

    return (<div className={classes.card}>
        <div className={classes["entry-info"]}>
            <div>
                <div className={classes["entry-name"]}>{`Lượt khám ngày ${moment(entryData.entryDate).format("DD/MM/yyyy")}`}</div>
                <div className={classes["entry-last"]}>4 tiếng trước</div>
            </div>
            <img src={arrowIndicator} alt="arrow-indicator" onClick={handleOnEntryDetailClick}/>
        </div>
        <span></span>
        <div className={classes["missing-entry-no"]}>{`Có ${data.elements.filter(e => !e.hasData).length} trường hình ảnh còn trống:`}</div>
        {data.elements.filter(e => !e.hasData).map(element => {
            return <InputFileCard label={element.name} key={element.elementId} elementId={element.elementId}/>
        })}
    </div>)
};

export default EntryCard;