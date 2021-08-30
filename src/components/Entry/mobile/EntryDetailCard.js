import moment from 'moment';
import InputFileCard from '../../UI/mobile/InputFileCard';
import classes from './EntryDetailCard.module.scss';

const EntryDetailCard = (props) => {
    
    const hasAvailableField = props.availableFields.length !== 0;
    const hasAddedField = props.addedFields.length !== 0;

    return <div className={classes.card}>
        <div className={classes.name}>Lượt khám ngày {moment(props.date).format("DD/MM")}</div>
        <div className={classes.lasting}>{moment(props.date).format("DD/MM/yyyy - hh:mm:ss")}</div>
        {hasAvailableField && <div className={classes.label}>Trường hình ảnh còn trống:</div>}
        {props.availableFields.map(element => {
            return <InputFileCard label={element.name} key={element.elementId} elementId={element.elementId}/>
        })}
        {hasAddedField && <div className={classes.label}>Trường hình ảnh đã thêm:</div>}
        {props.addedFields.map(element => {
            return <InputFileCard label={element.name} key={element.elementId} completed elementId={element.elementId}/>
        })}
    </div>
};

export default EntryDetailCard;