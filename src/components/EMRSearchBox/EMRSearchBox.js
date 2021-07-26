import React, { useState, useEffect, useCallback } from "react";
import "./emrSearchBox.scss";

const EMRSearchBox = (props) => {
  const [icon, setIcon] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [resultTxt, setResultTxt] = useState({ show: false, name: "" });

  const [lstSearchBox, setLstSearchBox] = useState({
    output: 0,
    lstSearchBox: [
      {
        patientName: "Võ Minh Nhật",
        patientPhoneNo: "0123456789",
        patientDob: "19/02/1997",
        patientLastCheckUp: "25/07/2021",
        patientNoEntries: "2",
      },
      {
        patientName: "Đàm Quốc Vẻ",
        patientPhoneNo: "0987654321",
        patientDob: "04/07/1997",
        patientLastCheckUp: "21/04/2021",
        patientNoEntries: "1",
      },
      {
        patientName: "Vũ Huyền Huyền",
        patientPhoneNo: "0246813579",
        patientDob: "18/07/2021",
        patientLastCheckUp: "21/04/2021",
        patientNoEntries: "100",
      },
    ],
  });

  function onChangeSearch(value) {
    setSearchInput(value);
    if (value !== null && value.length > 0) {
      setIcon(false);
    } else {
      setIcon(true);
    }
  }

  function onDeleteSearch() {
    setSearchInput("");
    setIcon(true);
  }

  let onSearch = async () => {
    if (searchInput === "abc") {
      setLstSearchBox({ ...lstSearchBox, output: 1 });
    } else if (searchInput !== null && searchInput.length > 0) {
      setLstSearchBox({ ...lstSearchBox, output: 0 });
    }
    console.log(lstSearchBox);
    setResultTxt({ show: true, name: searchInput });
    props.onSearch(lstSearchBox);
  };

  return (
    <div className="emrSearchBoxBody">
      <div className="memo">Để bắt đầu, vui lòng nhập tên bệnh nhân</div>
      <div className="search_grid">
        <div className="search_box">
          <input
            className="search_txt_section"
            placeholder="V.D: Nguyễn Tấn Dũng"
            value={searchInput}
            onChange={(e) => {
              onChangeSearch(e.target.value);
            }}
          />
          <div className="search_btn_section">
            <div className="icon_section">
              <img
                className="icon"
                src={"/assets/search-icon.png"}
                hidden={!icon}
              />
              <img
                className="icon"
                src={"/assets/erase-icon.png"}
                hidden={icon}
                onClick={onDeleteSearch}
              />
            </div>

            <button
              className="button-layout"
              style={{ width: "100%" }}
              onClick={onSearch}
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
      {resultTxt.show ? (
        <div className="search_result">
          0 kết quả tìm kiếm cho&nbsp;
          <div className="search_txt">"{resultTxt.name}"</div>
        </div>
      ) : null}
    </div>
  );
};

export default EMRSearchBox;
