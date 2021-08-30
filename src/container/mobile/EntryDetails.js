import { Fragment, useEffect } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import EntryDetailCard from "../../components/Entry/mobile/EntryDetailCard";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import BackButton from "../../components/UI/mobile/BackButton";
import useHttp from "../../hooks/use-http";
import { getImageElements } from "../../services/api/document";

const EntryDetails = () => {
    const { patientId, entryId } = useParams();
    const history = useHistory();
    const { sendRequest, status, data } = useHttp(getImageElements, true);

    useEffect(() => {
        async function fetchData() {
            await sendRequest(entryId);
        };
        fetchData();
    }, [entryId, sendRequest]);

    if (status === 'pending') {
        return <LoadingSpinner />
    }

    const handleOnBackButtonClick = () => {
        history.push(`/patient/${patientId}/entries`);
    }

    return <Fragment>
        <BackButton onBackButtonClick={handleOnBackButtonClick} backLabel="Danh sách bản ghi"/>
        <EntryDetailCard availableFields={data.elements.filter(e => !e.hasData)}
            date={data.entryDate}
            addedFields={data.elements.filter(e => e.hasData)}/>
    </Fragment>
};

export default EntryDetails;