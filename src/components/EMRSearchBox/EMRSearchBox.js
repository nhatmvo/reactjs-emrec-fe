import React, { useState, useEffect, useCallback } from "react";
import "./emrSearchBox.scss";

function EMRSearchBox() {
  const [icon, setIcon] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [resultTxt, setResultTxt] = useState({ show: false, name: "" });

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

  function onSearch() {
    console.log("Push");
    if (searchInput !== null && searchInput.length > 0)
      setResultTxt({ show: true, name: searchInput });
  }

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
}

export default EMRSearchBox;
