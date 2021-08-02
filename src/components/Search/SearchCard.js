import classes from "./SearchCard.module.scss";

import sample from "../../assets/small-picture.png";
import add from "../../assets/cross.png";
import male from "../../assets/male.png";
import female from '../../assets/female.png';

const SearchCard = (props) => {
  const avatar = props.gender === 'male' ?
    <img className={classes.avatar} src={male} alt="patient-avatar-male" /> :
    <img className={classes.avatar} src={female} alt="patient-avatar-female" />;

  return (
    <div className={classes.card}>
      {avatar}
      <div className={classes.information}>
        <div className={classes.name}>{props.name}</div>
        <div>{props.dob}</div>
        <div>{props.phoneNumber}</div>
        <div className={classes["lastest-date"]}>
          Ngày khám gần nhất: {props.mostReccentExaminationDate}
        </div>

        <div className={classes.entries}>
          <div className={classes["entry_previous"]}>
            <img src={sample} alt="previous-entry-ico" />
            <div className={classes.quantity}>
              {props.numberOfEntries}
            </div>
          </div>
          <div className={classes["entry-add"]}>
            <img className={classes.plus} src={add} alt="plus-ico" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
