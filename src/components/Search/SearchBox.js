import classes from './SearchBox.module.scss';

import Button from '../UI/Button'
import searchIcon from '../../assets/search-icon.png'
import eraseIcon from '../../assets/close-icon.png';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBox = (props) => {
    const [searchInput, setSearchInput] = useState('');
    const history = useHistory();

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
        // Mimic handle request
        const data = [
            {
                id: 1,
                patientName: "Võ Minh Nhật",
                patientPhoneNo: "0123456789",
                patientDob: "19/02/1997",
                patientLastCheckUp: "25/07/2021",
                patientNoEntries: "2",
                gender: "male"
            },
            {
                id: 2,
                patientName: "Đàm Quốc Vẻ",
                patientPhoneNo: "0987654321",
                patientDob: "04/07/1997",
                patientLastCheckUp: "21/04/2021",
                patientNoEntries: "1",
                gender: "male"
            },
            {
                id: 3,
                patientName: "Vũ Huyền Huyền",
                patientPhoneNo: "0246813579",
                patientDob: "18/07/2021",
                patientLastCheckUp: "21/04/2021",
                patientNoEntries: "12",
                gender: "female"
            },
        ]
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