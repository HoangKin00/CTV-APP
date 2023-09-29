import React from "react";
import { Link } from "react-router-dom";
import Search from "../../../../components/Input/Search";
import { PUBLIC_URL } from "../../../../utils/const";

const ReportActivityCtv = () => {
  return (
    <div>
      <div className="box">
        <div className="arrow">
          <Link to={"/bao-cao-hoat-dong"}>
            <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt="" />
            Quay lại
          </Link>
        </div>
        <div className="filter">
          <Search type="search" placeholder="Tìm kiếm" />
        </div>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>STT</th>
              <th>Tên CTV</th>
              <th>Sl dịch vụ</th>
              <th>Sl khách hàng</th>
              <th>Doanh thu</th>
              <th>Hoa hồng</th>
              <th>Chi tiết</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Tran Thi B</td>
              <td>3</td>
              <td>3</td>
              <td>30.000.000</td>
              <td>3.000.000</td>
              <td>
                <Link to={"/chi-tiet-bao-cao-hoat-dong-ctv-cua-quanly"}>
                  <img src={`${PUBLIC_URL}/icons/detail.svg`} alt="" />
                </Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Tran Thi B</td>
              <td>4</td>
              <td>4</td>
              <td>40.000.000</td>
              <td>4.000.000</td>
              <td>
                <Link to={"/chi-tiet-bao-cao-hoat-dong-ctv-cua-quanly"}>
                  <img src={`${PUBLIC_URL}/icons/detail.svg`} alt="" />
                </Link>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Tran Thi B</td>
              <td>5</td>
              <td>3</td>
              <td>50.000.000</td>
              <td>5.000.000</td>
              <td>
                <Link to={"/chi-tiet-bao-cao-hoat-dong-ctv-cua-quanly"}>
                  <img src={`${PUBLIC_URL}/icons/detail.svg`} alt="" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportActivityCtv;
