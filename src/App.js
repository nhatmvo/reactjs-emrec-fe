import "./App.css";
import EMRHeader from "./components/EMRHeader/EMRHeader";
import EMRSearchBox from "./components/EMRSearchBox/EMRSearchBox";
import { useState } from "react";
import EMRInput from "./components/EMRInput/EMRInput";
import "./components/common/common.scss";
import SearchScreen from "./container/screen/SearchScreen/SearchScreen";

function App() {
  return (
    <div>
      <EMRHeader />
      <SearchScreen />
      {/* <EMRSearchBox /> */}
      {/* <div className="emr-form" style={{ margin: "0px 50px 50px" }}>
        <div className="form-header">Header</div>
        <div className="row">
          <div className="section-title">Section title</div>
          <hr></hr>
        </div>
        <div className="row">
          <EMRInput
            title="Textarea"
            required={true}
            example="V.D: đau đầu, sốt cao,..."
            error="Lỗi"
            type="1"
          />
          <EMRInput
            title="Text"
            required={true}
            example="V.D: đau đầu, sốt cao,..."
            error="Lỗi"
            type="2"
          />
        </div>
        <div className="row">
          <EMRInput
            title="Date"
            required={true}
            example="V.D: đau đầu, sốt cao,..."
            error="Lỗi"
            type="3"
          />
        </div>
        <div className="row">
          <EMRInput
            title="Number"
            required={true}
            example="V.D: đau đầu, sốt cao,..."
            error="Lỗi"
            type="4"
          />
        </div>
        <div className="row">
          <EMRInput title="Image" required={true} error="Lỗi" type="5" />
        </div>
        <div className="row">
          <EMRInput title="Radio" required={true} error="Lỗi" type="6" />
        </div>
        <div className="row">
          <button className="button-layout" style={{ width: "150px" }}>
            Button
          </button>
        </div>
      </div>
     */}
    </div>
  );
}

export default App;
