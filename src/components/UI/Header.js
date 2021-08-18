import classes from './Header.module.scss';

const Header = (props) => {
    return <div className={classes.wrapper}>
        <div className={classes.header}>
            {props.label}
        </div>
        <div className={classes.content}>{props.children}</div>
    </div>

};

export default Header;