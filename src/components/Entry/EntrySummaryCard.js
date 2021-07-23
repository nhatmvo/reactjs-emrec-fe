import './EntrySummaryCard.scss';
import picture from '../../assets/picture.png'

const EntrySummaryCard = () => {
    return (
        <div className="entry-summary">
            <div className="entry-diagnostic">
                <div className="entry-diagnostic__label">CHẨN ĐOÁN BỆNH:</div>
                <div className="entry-diagnostic__name">Viêm ruột thừa</div>
            </div>
            <div className="entry-picture-date">
                <div className="entry-picture">
                    <img className="entry-picture__image" src={picture} />
                    <div className="entry-picture__quantity">2</div>
                </div>
                <div className="entry-date">12/07/2021 - 9:30 AM</div>
            </div>
        </div>
    );
}

export default EntrySummaryCard;