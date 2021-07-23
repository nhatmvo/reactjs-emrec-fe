import './PatientInformationCard.scss'
import avatar from '../../assets/avatar.png'
import qrcode from '../../assets/qr.png'

const PatientInformationCard = (props) => {
    return (
        <div className="patient-card">
            <div className="patient-card__informations">
                <div className="patient-card__avatar">
                    <img src={avatar}/>
                </div>
                <div className="patient-card__information">
                    <div className="patient-information__name">Võ Minh Nhât</div>
                    <div className="patient-information__dob">Sinh năm 1997</div>
                    <div className="patient-information__phone">Số điện thoại 0344145250</div>
                </div>
            </div>
            <div className="patient-card__qr">
                <img src={qrcode}/>
            </div>
        </div>
    )
}

export default PatientInformationCard;