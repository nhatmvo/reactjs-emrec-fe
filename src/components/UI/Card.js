import classes from './Card.module.scss';

const Card = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.box}>
                <div className={classes.header}>
                    {props.headerLabel}
                </div>
                <div className={classes.content}>{props.children}</div>
            </div>
        </div>

    );
};

export default Card;