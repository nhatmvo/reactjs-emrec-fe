import { useEffect, useState } from 'react';
import { useRef } from 'react';
import classes from './FileInput.module.scss';
import { SRLWrapper } from "simple-react-lightbox";
import ImageNameBar from './ImageNameBar';

const STORAGE_URL = "http://localhost:80/api/v1/storage"

const FileInput = (props) => {
    const [uploadedImages, setUploadedImages] = useState([]);
    const inputRef = useRef();

    const { onChangeValue } = props;

    useEffect(() => {
        if (uploadedImages.length != 0) {
            const fileChanges = uploadedImages.map(ui => { return ui.file });
            onChangeValue(fileChanges);
        }
    }, [uploadedImages])

    const onButtonClick = () => {
        inputRef.current.click(); 
    }

    const getFileExension = (fileName) => {
        return fileName.split('.').pop();
    }

    const handleOnEraseButtonClick = (imageId) => {
        const newImagesList = uploadedImages.filter(ui => ui.id !== imageId);
        setUploadedImages([...newImagesList]);
    }

    const handleOnInputChange = (event) => {
        const uploadFiles = [...event.target.files].map((element) => {
            const generatedId = Math.floor(100000 + Math.random() * 900000);
            return {
                id: generatedId,
                file: element
            };
        });
        setUploadedImages([...uploadedImages, ...uploadFiles]);
    }

    return (<div className={classes.control}>
        <label>{props.label}</label>
        {!props.readonly && <div className={`${classes["file-box"]} ${classes.className}`}>
            <button type="button" onClick={onButtonClick}>Chọn hình ảnh</button>
            <input type='file' id={props.id} ref={inputRef} onChange={handleOnInputChange} multiple />
            {uploadedImages.map(i => <ImageNameBar name={`${i.file.name.substring(0, 8)}.${getFileExension(i.file.name)}`} id={i.id} onEraseBtnClick={handleOnEraseButtonClick} />)}
        </div>}
        {props.readonly && <div className={classes.readonly}>
            <SRLWrapper>
                {props.value.length === 0 && <span>Chưa có hình ảnh được tải lên</span>}
                {props.value.map((uri) => {
                    return <img src={`${STORAGE_URL}/${uri}`} alt={`picture-for-elem-${props.id}`} />
                })}
            </SRLWrapper>
        </div>
        }
    </div>)
};

export default FileInput;

