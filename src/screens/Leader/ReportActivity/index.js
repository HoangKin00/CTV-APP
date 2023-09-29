import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import ReportActivityCustomer from "./Customers";
import ReportActStyles from "./ReportActivity.module.scss";
import ReportActivityService from "./Services";
import ReportActivityRevenue from "./Revenue";

const ReportActivity = () => {
  return (
    <div className={ReportActStyles["reportActivity"]}>
      <div className="box">
        <div className={ReportActStyles["reportActivity__des"]}>
          <div className={ReportActStyles["reportActivity__btn"]}>
            <Button primary>Team</Button>
          </div>
          <Link
            to={"/bao-cao-hoat-dong-ctv-cua-quanly"}
            className={ReportActStyles["reportActivity__btn"]}
          >
            <Button default>CTV</Button>
          </Link>
        </div>
        <div className={ReportActStyles["reportActivity__content"]}>
          <div className={ReportActStyles["reportActivity__item"]}>
            <ReportActivityCustomer />
          </div>
          <div className={ReportActStyles["reportActivity__item"]}>
            <ReportActivityService />
          </div>
          <div className={ReportActStyles["reportActivity__item"]}>
            <ReportActivityRevenue />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportActivity;
