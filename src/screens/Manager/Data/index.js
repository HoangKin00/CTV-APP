import React from "react";
import CustomerData from "./CustomerData";
import ServiceData from "./ServiceData";
import dataStyles from "./Data.module.scss";

const Data = () => {
  return (
    <div className={dataStyles["data"]}>
      <div className="date">
        <b>Chọn ngày</b>
        <input type="date" name="txtDate" id="txtDate" min="2000-01-01" />
        <input type="date" name="txtDate" id="txtDate" min="2000-01-01" />
        <button>Áp dụng</button>
      </div>
      <div className="box">
        <div className={dataStyles["data__main"]}>
          <div className={dataStyles["data__customer"]}>
            <div className="title">Khách hàng (% độ tuổi)</div>
            <CustomerData />
          </div>
          <div className={dataStyles["data__service"]}>
            <div className="title">Số lượng dịch vụ</div>
            <ServiceData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
