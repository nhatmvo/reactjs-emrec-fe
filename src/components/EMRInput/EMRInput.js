import React, { useState, useEffect, useCallback } from "react";
import "./emrInput.scss";
import "../common/common.scss";
import EMRButton from "./EMRButton";

const EMRInput = (props) => {
  const [state, setState] = useState(props);
  useEffect(() => {
    setState(props);
  }, [props]);
  //   console.log("info: ", info);
  return (
    <div className="main">
      <div className="title">
        {state.title}
        <div className="required" hidden={!state.required}>
          *
        </div>
      </div>
      <div className="input">
        {state.type == 1 ? (
          <textarea className="input_text_area" placeholder={state.example} />
        ) : null}

        {state.type == 2 ? (
          <input className="input_text" placeholder={state.example} />
        ) : null}
        {state.type == 3 ? <input className="input_text" type="date" /> : null}
        {state.type == 4 ? (
          <input className="input_text" type="number" />
        ) : null}
        {state.type == 5 ? (
          <div className="img-chosen">
            <div className="input">
              <EMRButton btnName="Chọn ảnh" width="146px" />
              <input
                className="input_text_img"
                placeholder="Chọn ảnh"
                disabled={true}
              />
            </div>
          </div>
        ) : null}
        {state.type == 6 ? (
          <div>
            <label for="radio">Radio 1</label>
            <input type="radio" name="radio" value="30" id="radio" />
            <label for="radio2">Radio 2</label>
            <input type="radio" name="radio" value="60" id="radio2" />
          </div>
        ) : null}
        {state.type == "error" ? (
          <div className="error">{state.error}</div>
        ) : null}
      </div>
    </div>
  );
};

export default EMRInput;
