import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Input/Search";
import { PUBLIC_URL } from "../../utils/const";

const ListCTV = () => {
  return (
    <div className="listEmp">
      <div className="title">Danh sách CTV</div>

      <div className="box">
        <div className="filter">
          <Search type="search" placeholder="Tìm kiếm" />
          <div className="select">
            <select name="" id="">
              <option value="">Trạng thái</option>
              <option value="">Đang hoạt động</option>
              <option value="">Không hoạt động</option>
            </select>
          </div>
        </div>
        <div className="listEmp__detail">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>STT</th>
                <th>Mã CTV</th>
                <th>Tên CTV</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Trạng thái</th>
                <th>Chi tiết</th>
              </tr>
              <tr>
                <td>1</td>
                <td>kn123</td>
                <td>Nguyen Van A</td>
                <td>nguyena@scigroup.com</td>
                <td>Ha Nam</td>
                <td>Đang hoạt động</td>
                <td>
                  <Link to={"/chi-tiet-ctv"}>
                    <img src={`${PUBLIC_URL}/icons/detail.svg`} alt="" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>kn123</td>
                <td>Nguyen Van A</td>
                <td>nguyena@scigroup.com</td>
                <td>Ha Nam</td>
                <td>Đang hoạt động</td>
                <td>
                  <Link to={"/chi-tiet-ctv"}>
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

export default ListCTV;
