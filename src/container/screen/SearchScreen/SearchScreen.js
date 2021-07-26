import React, { useState, useEffect, useCallback } from "react";
import EMRInput from "../../../components/EMRInput/EMRInput";
import EMRSearchBox from "../../../components/EMRSearchBox/EMRSearchBox";
import PatientSearchResults from "../../../components/Patient/PatientSearchResults";
import "./searchScreen.scss";
import "../../../components/common/common.scss";

const SearchScreen = (props) => {
  const [state, setState] = useState(props);
  const [lstSearchBox, setLstSearchBox] = useState([]);
  const [enable, setEnable] = useState({
    searchResult: true,
    addPatient: true,
  });
  useEffect(() => {
    setState(props);
  }, [props]);

  function onSearch(result) {
    if (result.output == 0) {
      setLstSearchBox(result.lstSearchBox);
      setEnable({ ...enable, addPatient: true, searchResult: false });
    } else {
      setEnable({ ...enable, addPatient: false, searchResult: true });
    }
    console.log(enable);
  }

  return (
    <div className="main">
      <EMRSearchBox onSearch={onSearch} />
      <div hidden={enable.searchResult}>
        <PatientSearchResults results={lstSearchBox} />
      </div>
      <div hidden={enable.searchResult}>
        <div className="add-profile-box" style={{ width: "700px" }}>
          Bệnh nhân chưa có hồ sơ?&nbsp;
          <a className="link-click">Tạo hồ sơ mới</a>
        </div>
      </div>
      <div
        className="emr-form"
        style={{ margin: "0px 50px 50px" }}
        hidden={enable.addPatient}
      >
        <div className="form-header">Tạo hồ sơ bệnh nhân</div>
        <div style={{ padding: "25px 200px" }}>
          <div className="row">
            <div className="section-title">
              Thông tin định danh
              <hr></hr>
            </div>
          </div>
          <div className="row" style={{ margin: "15px 0" }}>
            <EMRInput
              title="Họ tên"
              required={true}
              example="V.D: Nguyễn Tấn Dũng"
              error="Lỗi"
              type="2"
            />
          </div>
          <div className="row" style={{ margin: "15px 0" }}>
            <EMRInput
              title="Năm sinh"
              required={true}
              example="V.D: đau đầu, sốt cao,..."
              error="Lỗi"
              type="3"
            />
            <EMRInput
              title="Số điện thoại"
              required={true}
              example="V.D: đau đầu, sốt cao,..."
              error="Lỗi"
              type="4"
            />
          </div>
          <div className="row" style={{ margin: "15px 0" }}>
            <EMRInput
              title="CMND/CCCD"
              required={true}
              example="V.D: đau đầu, sốt cao,..."
              error="Lỗi"
              type="4"
            />
          </div>
          <div className="row" style={{ margin: "15px 0" }}>
            <EMRInput title="Địa chỉ" required={false} error="Lỗi" type="2" />
          </div>
          <div className="row" style={{ margin: "15px 0" }}>
            <EMRInput title="Email" required={false} error="Lỗi" type="2" />
          </div>
          <div className="row" style={{ margin: "15px 0" }}>
            <div className="section-title">
              thông tin khám bệnh
              <hr></hr>
            </div>
          </div>
          <div className="row" style={{ margin: "15px 0" }}>
            <EMRInput
              title="Ngày đến khám"
              required={false}
              error="Lỗi"
              type="3"
            />
            <EMRInput
              title="Bảo hiểm"
              error="Lỗi"
              type="6"
              lstRadio={[{ name: "Có" }, { name: "Không" }]}
            />
          </div>
          <div className="row" style={{ width: "100%" }}>
            <button
              className="button-layout"
              style={{ width: "150px", margin: "50px auto" }}
            >
              Tạo hồ sơ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
