import classes from './InformationCard.module.scss'

import male from '../../assets/male.png';
import female from '../../assets/female.png';
import qrCode from '../../assets/qr-code.png';
import edit from '../../assets/edit.png'
import Button from '../UI/Button';

const InformationCard = (props) => {

    const avatar = props.gender === 'male' ? <img src={male} alt="patient-gender-male" /> : <img src={female} alt="patient-gender-female" />
    return (
        <div className={classes.card}>
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
                <Button className={classes.button} buttonStyle="btn--white--solid">
                    <img src={qrCode} alt="small-qr-code" />
                    &nbsp;&nbsp;Mã QR
                </Button>
            </div>
        </div>
    )
}

export default InformationCard;