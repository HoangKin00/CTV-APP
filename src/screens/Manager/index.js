import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Input/Search";
import { PUBLIC_URL } from "../../utils/const";
import listEmpStyles from "./ListEmployee.module.scss";

const ListEmployee = () => {
  return (
    <div className={listEmpStyles["listEmp"]}>
      <div className={listEmpStyles["listEmp__des"]}>
        <div className="title">Danh sách CTV</div>
        <div className={listEmpStyles["listEmp__button"]}>
          <Link to={"/duyet-ctv"}>
            <span>
              <img src={`${PUBLIC_URL}/icons/noti.svg`} alt="" /> <sup>5</sup>
            </span>
            Duyệt CTV
          </Link>
        </div>
      </div>
      <div className="box">
        <div className="filter">
          <Search type="search" placeholder="Tìm kiếm" />
          <div className="select">
            <select name="" id="">
              <option value="">Nguồn đăng kí</option>
              <option value="">Link</option>
              <option value="">Khách hàng cũ</option>
            </select>
          </div>
        </div>
        <div className={listEmpStyles["listEmp__detail"]}>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>STT</th>
                <th>Tên NV</th>
                <th>Nguồn đăng kí</th>
                <th>Tuổi</th>
                <th>Địa chỉ</th>
                <th>Ngày đăng kí</th>
                <th>Kí hợp đồng</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Nguyen Van A</td>
                <td>Link</td>
                <td>22</td>
                <td>Ha Nam</td>
                <td>01/01/2023</td>
                <td>Đã kí</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListEmployee;
