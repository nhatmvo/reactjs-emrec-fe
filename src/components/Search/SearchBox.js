import classes from './SearchBox.module.scss';

import Button from '../UI/Button'
import searchIcon from '../../assets/search-icon.png'
import eraseIcon from '../../assets/close-icon.png';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getPatientByFilterMobile, getPatients } from '../../services/api/patient';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';
import LoadingSpinner from '../UI/LoadingSpinner';


const SearchBox = (props) => {
    const [searchInput, setSearchInput] = useState('');
    const history = useHistory();
    const { sendRequest, status, data } = useHttp(getPatients)
    const { sendRequest: getPatientForMobileRequest, status: patientForMobileStatus, data: patientMobileData } = useHttp(getPatientByFilterMobile);

    useEffect(() => {
        if (!isMobile) {
            if (status === 'completed') {
                if (data.length > 1) {
                    props.onSearch(data, searchInput);
                } else if (data.length === 1) {
                    history.push(`/patient/${data[0].patientId}/entries`);
                } else if (data.length === 0) {
                    history.push('/patient/add');
                }
            }
        } else {
            if (patientForMobileStatus === 'completed') {
                history.push(`/patient/${patientMobileData.patientId}/entries/${patientMobileData.latestEntryId}/quick-access`);
            }
        }
        
    }, [status, data, isMobile, patientForMobileStatus]);

    const hasInputValue = searchInput !== '';

    if (status === 'pending') {
        return <LoadingSpinner />;
    }

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    }

    const onEraseBtnClickHandler = () => {
        setSearchInput('');
    }

    const handleSearchBtnOnMobile = () => {
        const submitValue = searchInput;
        getPatientForMobileRequest(submitValue);
    } 

    const handleSearchBtnOnDesktop = () => {
        const submitValue = searchInput;
        sendRequest(searchInput)

        if (data != null && data.length === 0) {
            history.push('/patient/add');
        }
        props.onSearch(data, submitValue)
    }

    const handleSearchBtnClick = (event) => {
        event.preventDefault();
        isMobile ? handleSearchBtnOnMobile() : handleSearchBtnOnDesktop();
    }

    let displayIcon;

    if (!hasInputValue) {
        displayIcon = <img src={searchIcon} className={classes["search-icon"]} alt="search-icon" />;
    } else {
        displayIcon = <img src={eraseIcon} className={classes["search-icon"]} onClick={onEraseBtnClickHandler} alt="erase-icon" />;
    }


    return (<form className={classes["search-wrapper"]}>
        <BrowserView>
            <div className={classes["search-box"]}>
                <div className={classes['search-area']}>
                    <input className={classes["search-text"]} type="text" value={searchInput} onChange={handleInputChange} />
                    {displayIcon}
                </div>
                <Button className={classes["search-button"]} onClick={handleSearchBtnClick}>Tìm kiếm</Button>
            </div>
        </BrowserView>
        <MobileView>
            <div className={classes.instruction}>Để bắt đầu, vui lòng nhập thông tin bệnh nhân:</div>
            <div className={classes["search-box"]}>
                <input type="text" className={classes["search-text"]} value={searchInput} onChange={handleInputChange} />
                {displayIcon}
            </div>
            <Button className={classes["search-button"]} onClick={handleSearchBtnClick} >Tìm kiếm</Button>
        </MobileView>
    </form>)
};


export default SearchBox;