import classes from './BackButton.module.scss';
import backArrow from '../../../assets/back-arrow.png';

const BackButton = (props) => {

    const handleOnBackBtnClick = () => {
        props.onBackButtonClick();
    }

    return <div className={classes.card}>
        <div className={classes.back} onClick={handleOnBackBtnClick}>
            <img src={backArrow} alt="back-arrow"/>
            <label>{props.backLabel}</label>
        </div>
    </div>
};

export default BackButton;