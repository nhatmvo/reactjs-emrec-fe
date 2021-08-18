import classes from './InformationCard.module.scss'

import male from '../../assets/male.png';
import female from '../../assets/female.png';
import qrCode from '../../assets/qr-code.png';
import edit from '../../assets/edit.png'
import Button from '../UI/Button';
import { useEffect, useRef, useState } from 'react';
import QRModal from '../UI/QRModal';

const InformationCard = (props) => {
    const [displayQRModal, setDisplayQRModal] = useState(false);

    const handleQrButtonClick = () => {
        setDisplayQRModal(true)
    }

    const onBackdropClick = () => {
        setDisplayQRModal(false);
    }

    const avatar = props.gender === 'male' ? <img src={male} alt="patient-gender-male" /> : <img src={female} alt="patient-gender-female" />
    return (
        <div className={`${classes.card} ${props.className}`}>
            <div className={classes['information-wrapper']}>
                <div className={classes.avatar}>
                    {avatar}
                </div>
                <div className={classes.information}>
                    <div className={classes.name}>{props.name}</div>
                    <div>Sinh năm {props.yearOfBirth}</div>
                    <div>Số điện thoại {props.phoneNumber}</div>
                </div>
            </div>
            <div className={classes.buttons}>
                <Button className={classes.button} buttonStyle="btn--white--solid">
                    <img src={edit} alt="small-edit-icon" />
                    &nbsp;&nbsp;Chỉnh sửa
                </Button>
                <Button className={classes.button} buttonStyle="btn--white--solid" onClick={handleQrButtonClick}>
                    <img src={qrCode} alt="small-qr-code" />
                    &nbsp;&nbsp;Mã QR
                </Button>
            </div>
            {displayQRModal && <QRModal onBackdropClick={onBackdropClick}/>}
        </div>
    )
}

export default InformationCard;