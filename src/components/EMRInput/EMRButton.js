import React, { useState, useEffect, useCallback } from "react";
import "./emrButton.scss";
import "../common/common.scss";

const EMRButton = (props) => {
  const [state, setState] = useState(props);
  useEffect(() => {
    setState(props);
  }, [props]);
  return (
    <div className="button-layout" style={{ width: state.width }}>
      {state.icon !== "" ? <img classname="icon" src={state.icon} /> : null}
      {state.btnName}
    </div>
  );
};

export default EMRButton;
