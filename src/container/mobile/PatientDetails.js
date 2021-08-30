import { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import EntryCard from '../../components/Entry/mobile/EntryCard';
import EntrySummaryCardList from '../../components/Entry/mobile/EntrySummaryCardList';
import NavigationTabBar from '../../components/Layout/mobile/NavigationTabBar';
import InformationCardMobile from '../../components/Patient/InformationCardMobile';

const PatientDetails = () => {
    const { entryId } = useParams();
    
    return (<Fragment>
        <InformationCardMobile />
        <NavigationTabBar />
        { entryId != null ? <EntryCard /> : <EntrySummaryCardList /> }
    </Fragment>)
}

export default PatientDetails;