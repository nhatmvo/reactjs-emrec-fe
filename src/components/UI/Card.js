import moment from 'moment';
import { NavLink } from 'react-router-dom';
import classes from './Card.module.scss';

const Card = (props) => {

    const hasPriorEntry = props.priorEntry != null;
    const hasSucceddingEntry = props.succeedingEntry != null;
    let priorDate = <div className={classes.prior} style={{visibility: 'hidden'}} >DD/MM/yyyy</div>;
    let succeddingDate = <div className={classes.succedding} style={{visibility: 'hidden'}} >DD/MM/yyyy</div>;
    if (hasPriorEntry) {
        const { entryId: priorEntryId, entryDate: priorEntryDate } = props.priorEntry;
        priorDate =  <NavLink to="" className={classes.prior}><span>{"< "}</span>{moment(priorEntryDate).format("DD/MM/yyyy")}</NavLink>
    }
    if (hasSucceddingEntry) {
        const { entryId: succeddingEntryId, entryDate: succeddingEntryDate } = props.succeedingEntry;
        succeddingDate = <NavLink to="" className={classes.succedding}>{moment(succeddingEntryDate).format("DD/MM/yyyy")}<span>{" >"}</span></NavLink>
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.box}>
                <div className={classes.header}>
                   {priorDate}
                    <div>{props.headerLabel}</div>
                    {succeddingDate}
                </div>
                <div className={classes.content}>{props.children}</div>
            </div>
        </div>

    );
};

export default Card;