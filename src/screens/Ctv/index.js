import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Input/Search";
import { PUBLIC_URL } from "../../utils/const";
import listKhStyles from "./List.module.scss";

const ListCustomer = () => {
  return (
    <div className={listKhStyles["list"]}>
      <div className={listKhStyles["list__button"]}>
        <Link to={"/them-moi-kh"}>
          Thêm mới khách hàng <span>+</span>
        </Link>
      </div>
      <div className="box">
        <div className="filter">
          <Search type="search" placeholder="Tìm kiếm" />
          <div className="select">
            <select name="" id="">
              <option value="">Trạng thái</option>
              <option value="">Booking</option>
              <option value="">Đã làm dv</option>
              <option value="">Chưa làm dv</option>
            </select>
          </div>
        </div>
        <div className={listKhStyles["list__detail"]}>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>STT</th>
                <th>Mã booking</th>
                <th>Tên Kh</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>Trạng thái</th>
                <th>Ngày tạo</th>
                <th>Chi tiết</th>
              </tr>
              <tr>
                <td>1</td>
                <td>kn123</td>
                <td>Tran Van C</td>
                <td>0987654321</td>
                <td>Hà Nội</td>
                <td>Booking</td>
                <td>01/01/2021</td>
                <td>
                  <Link to={"/chi-tiet-kh"}>
                    <img src={`${PUBLIC_URL}/icons/detail.svg`} alt="" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>kn123</td>
                <td>Tran Van C</td>
                <td>0987654321</td>
                <td>Hà Nội</td>
                <td>Đã làm dv</td>
                <td>01/01/2021</td>
                <td>
                  <Link to={"/chi-tiet-kh"}>
                    <img src={`${PUBLIC_URL}/icons/detail.svg`} alt="" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>kn123</td>
                <td>Tran Van C</td>
                <td>0987654321</td>
                <td>Hà Nội</td>
                <td>Chưa làm dv</td>
                <td>01/01/2021</td>
                <td>
                  <Link to={"/chi-tiet-kh"}>
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

export default ListCustomer;
