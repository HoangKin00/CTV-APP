import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Search from "../../../components/Input/Search";
import { PUBLIC_URL } from "../../../utils/const";
import commiStyles from "./CommissionReport.module.scss";

const CommissionReport = () => {
  return (
    <div className={commiStyles["commissionReport"]}>
      <div className="box">
        <div className="title">Báo cáo hoa hồng dịch vụ</div>
        <div className="filter">
          <Search type="search" placeholder="Tìm kiếm" />
          <div className={commiStyles["commissionReport__date"]}>
            <input type="date" />
            <Button>Áp dụng</Button>
          </div>
        </div>
        <div className={commiStyles["commissionReport__table"]}>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>STT</th>
                <th>Dịch vụ</th>
                <th>Tổng số</th>
                <th>Doanh thu</th>
                <th>Hoa hồng</th>
                <th>% HH chưa nhận</th>
                <th>% HH đã nhận</th>
                <th>Chi tiết</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Cắt mí</td>
                <td>3</td>
                <td>30.000.000</td>
                <td>3.000.000</td>
                <td>3.000.000</td>
                <td>0</td>
                <td>
                  <Link to={"/chi-tiet-bao-cao-hoa-hong-dv"}>
                    <img src={`${PUBLIC_URL}/icons/detail.svg`} alt="" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Nâng mũi</td>
                <td>2</td>
                <td>60.000.000</td>
                <td>6.000.000</td>
                <td>0</td>
                <td>6.000.000</td>
                <td>
                  <Link to={"/chi-tiet-bao-cao-hoa-hong-dv"}>
                    <img src={`${PUBLIC_URL}/icons/detail.svg`} alt="" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Hút mỡ</td>
                <td>4</td>
                <td>60.000.000</td>
                <td>6.000.000</td>
                <td>0</td>
                <td>6.000.000</td>
                <td>
                  <Link to={"/chi-tiet-bao-cao-hoa-hong-dv"}>
                    <img src={`${PUBLIC_URL}/icons/detail.svg`} alt="" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CommissionReport;
