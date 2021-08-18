import classes from './Section.module.scss';

const Section = (props) => {
    return <div className={classes.section}>
        <div className={classes.label}>
            <nobr>{props.label}</nobr><hr />
        </div>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
};

export default Section;