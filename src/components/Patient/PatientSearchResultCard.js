import './PatientSearchResultCard.scss';
import sample from '../../assets/small-picture.png';
import add from '../../assets/cross.png';
import avatar from '../../assets/avatar.png'

const PatientSearchResultCard = (props) => {
    return (
        <div className="patient-card">
            <div  className="patient-avatar">
                <img src={avatar}/>
            </div>
            <div className="patient-info">
                <div className="patient-info__name">{props.name}</div>
                <div className="patient-info__dob">{props.dob}</div>
                <div className="patient-info__masked-phone">{props.phoneNumber}</div>
                <div className="patient-info__latest-day">Ngày khám gần nhất: {props.mostReccentExaminationDate}</div>
                <div className="patient-entries">
                    <div className="patient-entry_previous">
                        <img src={sample} alt="Lượt khám trước đây" />
                        <div className="patient-entry__previous-quantity">{props.numberOfEntries}</div>
                    </div>
                    <div className="patient-entry__add">
                        <img className="patient-entry__cross" src={add} alt="Thêm lượt khám" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PatientSearchResultCard;