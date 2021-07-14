import './PatientSearchResultCard.scss';

const PatientSearchResultCard = (props) => {
    return (
        <div className="patient">
            <div className="patient-image"></div>
            <div className="patient-info">
                <div className="patient-info__name">{props.name}</div>
                <div className="patient-info__dob">{props.dob}</div>
                <div className="patient-info__masked-phone">{props.phoneNumber}</div>
                <div className="patient-info__latest-day">{props.latestEntryDate}</div>
                <div>
                    <div>
                        <img src="../../assets/small-picture.png" alt="Số lượng ảnh bệnh nhân" />
                        <div>2</div>
                    </div>
                    <img src="../../assets/add-entry-small-btn.png" alt="Thêm lượt khám" />
                </div>
            </div>
        </div>
    )
}