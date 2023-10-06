import React from "react";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../../../../utils/const";
import ReportActivityCustomer from "../../Customers";
import ReportActivityRevenue from "../../Revenue";
import ReportActivityService from "../../Services";
import detaiRepActStyles from "./detailReportActivityCtv.module.scss";

const DetailReportActivityCtv = () => {
  return (
    <div className={detaiRepActStyles["detailRepCtv"]}>
      <div className="arrow">
        <Link to={"/bao-cao-hoat-dong-ctv-cua-quanly"}>
          <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt="" />
          Quay lại
        </Link>
      </div>
      <div className="title">
        Cộng tác viên: <span>Tran Thi B</span>
      </div>
      <div className="box">
        <div className={detaiRepActStyles["detailRepCtv__content"]}>
          <div className={detaiRepActStyles["detailRepCtv__item"]}>
            <ReportActivityService />
          </div>
          <div className={detaiRepActStyles["detailRepCtv__item"]}>
            <ReportActivityCustomer />
          </div>
          <div className={detaiRepActStyles["detailRepCtv__item"]}>
            <ReportActivityRevenue />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailReportActivityCtv;
