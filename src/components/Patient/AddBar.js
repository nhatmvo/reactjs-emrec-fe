import { Link } from 'react-router-dom';
import classes from './AddBar.module.scss';

const AddBar = () => {
    return (
        <div className={classes.bar}>
            Bệnh nhân chưa có hồ sơ?&nbsp;
            <Link className={classes.link} to="/patient/add">Tạo hồ sơ mới</Link>
        </div>
    );
};

export default AddBar;