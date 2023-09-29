import React from "react";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../../../utils/const";
import ReportCommission from "../Commission";
import ReportCustomer from "../Customer";
import ReportService from "../Service";
import mainReportStyles from "./MainReport.module.scss";

const MainReport = () => {
  return (
    <div className={mainReportStyles["mainReport"]}>
      <div className="arrow">
        <Link to={"/bao-cao"}>
          <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt="" />
          Quay lại
        </Link>
      </div>
      <div className={mainReportStyles["mainReport__box"]}>
        <div className={mainReportStyles["mainReport__item"]}>
          <div className="box">
            <div className="title">Báo cáo doanh số dịch vụ</div>
            <ReportService />
          </div>
        </div>
        <div className={mainReportStyles["mainReport__item"]}>
          <div className="box">
            <div className="title">Báo cáo doanh số khách hàng</div>
            <ReportCustomer />
          </div>
        </div>
        <div className={mainReportStyles["mainReport__item"]}>
          <div className="box">
            <div className="title">Báo cáo hoa hồng</div>
            <ReportCommission />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainReport;
