import classes from './SearchBox.module.scss';

import Button from '../UI/Button'
import searchIcon from '../../assets/search-icon.png'
import eraseIcon from '../../assets/close-icon.png';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useHttp from '../../hooks/use-http';
import { getPatients } from '../../services/api/patient';


const SearchBox = (props) => {
    const [searchInput, setSearchInput] = useState('');
    const history = useHistory();
    const { sendRequest, status, data } = useHttp(getPatients)

    useEffect(() => {
        if (status === 'completed') {
            if (data.length > 1) {
                props.onSearch(data, searchInput);
            } else if (data.length === 1) {
                console.log(data[0]);
                history.push(`/patient/${data[0].patientId}/entries`);
            } else if (data.length === 0) {
                history.push('/patient/add');
            }
        }
    }, [status, data]);

    const hasInputValue = searchInput !== '';

    const onChangeHandler = (event) => {
        setSearchInput(event.target.value);
    }

    const onEraseBtnClickHandler = () => {
        setSearchInput('');
    }

    const onSearchBtnClickHandler = (event) => {
        event.preventDefault();
        const submitValue = searchInput;
        sendRequest(searchInput)
        
        if (data != null && data.length == 0) {
            history.push('/patient/add');
        }
        props.onSearch(data, submitValue)
    }

    let displayIcon;

    if (!hasInputValue) {
        displayIcon = <img src={searchIcon} className={classes["search-icon"]} alt="search-icon" />;
    } else {
        displayIcon = <img src={eraseIcon} className={classes["search-icon"]} onClick={onEraseBtnClickHandler} alt="erase-icon" />;
    }


    return (<form className={classes["search-wrapper"]}>
        <div className={classes["search-box"]}>
            <div className={classes['search-area']}>
                <input className={classes["search-text"]} type="text" value={searchInput} onChange={onChangeHandler} />
                {displayIcon}
            </div>
            <Button className={classes["search-button"]} onClick={onSearchBtnClickHandler}>Tìm kiếm</Button>
        </div>
    </form>)
};

export default SearchBox;