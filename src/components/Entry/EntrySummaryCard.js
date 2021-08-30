import './EntrySummaryCard.scss';
import picture from '../../assets/picture.png'

const EntrySummaryCard = (props) => {
    return (
        <div className="entry-summary" onClick={props.onCardClick}>
            <div className="entry-diagnostic">
                <div className="entry-diagnostic__label">CHẨN ĐOÁN BỆNH:</div>
                <div className="entry-diagnostic__name">{props.diagnostic}</div>
            </div>
            <div className="entry-picture-date">
                <div className="entry-picture">
                    <img className="entry-picture__image" src={picture} alt="small-ico"/>
                    <div className="entry-picture__quantity">{props.entryTotalPictures}</div>
                </div>
                <div className="entry-date">{props.entryDate}</div>
            </div>
        </div>
    );
}

export default EntrySummaryCard;