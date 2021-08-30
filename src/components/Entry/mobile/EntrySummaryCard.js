import classes from './EntrySummaryCard.module.scss';
import arrowIndicator from '../../../assets/arrow.png';
import moment from 'moment';

const EntrySummaryCard = (props) => {
    return <div className={classes.card}>
        <div className={classes.information}>
            <div className={classes.name}>{props.entryName}</div>
            <div className={classes.lasting}>{moment(props.date).format("DD/MM/yyyy")}</div>
        </div>
        <img src={arrowIndicator} alt="arrow-indicator"/>
    </div>
};

export default EntrySummaryCard;