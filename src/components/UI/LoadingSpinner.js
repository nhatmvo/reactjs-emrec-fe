import classes from './LoadingSpinner.module.scss';
import PulseLoader from "react-spinners/ClipLoader";

const LoadingSpinner = () => {
    const color = "#30A16A";

    return <div className={classes.loader}>
        <PulseLoader color={color} size={20}/>
    </div>
};

export default LoadingSpinner;