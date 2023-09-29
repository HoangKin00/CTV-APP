import React from "react";
import ReportActivityCustomer from "../../Leader/ReportActivity/Customers";
import ReportActivityRevenue from "../../Leader/ReportActivity/Revenue";
import ReportActivityService from "../../Leader/ReportActivity/Services";
import ReportCtvStyles from "./ReportCtv.module.scss";

const ReportCtv = () => {
  return (
    <div className={ReportCtvStyles["reportCtv"]}>
      <div className="title">Báo cáo hoạt động</div>
      <div className="box">
        <div className={ReportCtvStyles["reportCtv__content"]}>
          <div className={ReportCtvStyles["reportCtv__item"]}>
            <ReportActivityService />
          </div>
          <div className={ReportCtvStyles["reportCtv__item"]}>
            <ReportActivityCustomer />
          </div>
          <div className={ReportCtvStyles["reportCtv__item"]}>
            <ReportActivityRevenue />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCtv;
