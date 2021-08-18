import classes from './ImageNameBar.module.scss';
import closeVector from '../../assets/Vector.png';

const ImageNameBar = (props) => {

    const onEraseBtnClickHandler = (id, event) => {
        props.onEraseBtnClick(id);
    }

    return (
        <div className={classes.wrapper}>
            <div>{props.name}</div>
            <span onClick={onEraseBtnClickHandler.bind(null, props.id)}>
                <img src={closeVector}  id={props.id} alt="erase-icon" />
            </span>
        </div>
    );
};

export default ImageNameBar;