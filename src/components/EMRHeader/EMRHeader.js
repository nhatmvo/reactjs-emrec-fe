import React, { useState, useEffect } from "react";
import "./emrHeader.scss";

function EMRHeader(props) {
  const [account, setAccount] = useState({
    name: "Bs. Nguyên",
  });

  return (
    <div className="header">
      <div className="title">
        <div className="EMR_title">EMR</div>
        <div className="EMR_hospital">Bệnh viện Hữu nghị Việt Đức</div>
      </div>

      <div className="menu_bar">
        <div className="option">Tìm kiếm bệnh nhân</div>
        <div className="option">Lịch sử</div>
        <div className="option">{account.name}</div>
      </div>
    </div>
  );
}

export default EMRHeader;
