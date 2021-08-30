import { useEffect, useRef } from 'react';
import classes from './InputFileCard.module.scss';
import checked from '../../../assets/checked.png';
import useHttp from '../../../hooks/use-http';
import { updateForm } from '../../../services/api/document';
import { useParams } from 'react-router-dom';

const InputFileCard = (props) => {
    const inputRef = useRef();
    const { entryId } = useParams();
    const { sendRequest, status, data, error } = useHttp(updateForm, false);

    const handleAddBtnClick = () => {
        inputRef.current.click(); 
    }

    const handleInputOnChange = (elementId, event) => {
        let formDataSend = new FormData();
        formDataSend.append("entryId", entryId);
        let index = 0;
        const fileList = [...event.target.files]
        fileList.forEach(file => {
            let elementIdParamName = `entryDataRequests[${index}].elementId`;
            formDataSend.append(elementIdParamName, elementId);
            let fileParamName = `entryDataRequests[${index}].files`;
            formDataSend.append(fileParamName, file)
            index++;
        });
        sendRequest(formDataSend);
    }

    useEffect(() => {
        if (status === 'completed' && error != null) {
            window.location.reload();
        }
    }, [status, data])

    if (props.completed) {
        return <div className={classes["completed-card"]}>
            <label><img src={checked} alt="checked-ico"/>{props.label}</label>
            <div onClick={handleAddBtnClick}>CHỈNH SỬA</div>
            <input type="file" ref={inputRef} onChange={handleInputOnChange.bind(null, props.elementId)} multiple/>
        </div>
    }


    return <div className={classes.card}>
        <label>{props.label}</label>
        <div onClick={handleAddBtnClick}>THÊM</div>
        <input type="file" ref={inputRef} onChange={handleInputOnChange.bind(null, props.elementId)} multiple/>
    </div>
};


export default  InputFileCard;