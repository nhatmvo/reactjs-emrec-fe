import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import useHttp from '../../../hooks/use-http';
import { getPatientByFilterMobile } from '../../../services/api/patient';
import classes from './NavigationTabBar.module.scss';

const NavigationTabBar = () => {
    const { patientId } = useParams();
    const { sendRequest, status, data } = useHttp(getPatientByFilterMobile, true);

    useEffect(() => {
        sendRequest(patientId);
    }, [patientId, sendRequest])

    if (status === 'pending') {
        return <></>
    }

    return <nav className={classes.nav}>
        <ul>
            <li>
                <NavLink to={`/patient/${patientId}/entries/${data.latestEntryId}/quick-access`} activeClassName={classes.active} exact>
                    Mục cần thêm
                </NavLink>
            </li>
            <li>
                <NavLink to={`/patient/${patientId}/entries`} activeClassName={classes.active} exact>
                    Danh sách bản ghi
                </NavLink>
            </li>
        </ul>
    </nav>
};

export default NavigationTabBar;

