import React from "react";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../../../utils/const";
import detailCommiStyles from "./DetailCommissionReport.module.scss";

const DetailCommissionReport = () => {
  return (
    <div className={"detailCommi"}>
      <div className="arrow">
        <Link to={"/bao-cao-hoa-hong-dv"}>
          <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt="" />
          Quay lại
        </Link>
      </div>
      <div className="box">
        <div className="title">
          Dịch vụ: <span>Cắt mí</span>
        </div>
        <div className={detailCommiStyles["detailCommi__des"]}>
          <div className={detailCommiStyles["detailCommi__item"]}>
            <table className="table">
              <tbody>
                <tr>
                  <th>Dịch vụ:</th>
                  <td>Cắt mí</td>
                </tr>
                <tr>
                  <th>Tổng số ca:</th>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={detailCommiStyles["detailCommi__item"]}>
            <table className="table">
              <tbody>
                <tr>
                  <th>Doanh thu:</th>
                  <td>30.000.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={detailCommiStyles["detailCommi__box"]}>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Tên khách hàng:</th>
                <th>Bác sĩ thực hiện</th>
                <th>Thời gian thực hiện</th>
              </tr>
              <tr>
                <td>Nguyen Van A</td>
                <td>Tran Van C</td>
                <td>13h-14h</td>
              </tr>
              <tr>
                <td>Nguyen Van A</td>
                <td>Tran Van C</td>
                <td>13h-14h</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailCommissionReport;
