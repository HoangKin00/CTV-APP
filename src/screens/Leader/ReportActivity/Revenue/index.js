import React from "react";
import reportRevenueStyles from "./Revenue.module.scss";

const ReportActivityRevenue = () => {
  return (
    <div className={reportRevenueStyles["reportReven"]}>
      <div className="box">
        <table className="table">
          <tbody>
            <tr>
              <th>Tổng số ca</th>
              <th>Doanh thu</th>
            </tr>
            <tr>
              <td>4</td>
              <td>200.000.000</td>
            </tr>
          </tbody>
        </table>
        <div>
          <button>3 ngày</button>
          <button>7 ngày</button>
        </div>
        <h4>Báo cáo doanh thu</h4>
      </div>
    </div>
  );
};

export default ReportActivityRevenue;
