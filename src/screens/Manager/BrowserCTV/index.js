import React from "react";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../../utils/const";
import browserStyles from "./BrowserCTV.module.scss";

const BrowserCTV = () => {
  return (
    <div className={browserStyles["browser"]}>
      <div className="arrow">
        <Link to={"/danh-sach-nhan-vien"}>
          <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt="" />
          Quay lại
        </Link>
      </div>
      <div className="box">
        <div className="title">Duyệt CTV</div>
        <div className={browserStyles["browser__detail"]}>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>STT</th>
                <th>Tên NV</th>
                <th>Nguồn đăng kí</th>
                <th>Tuổi</th>
                <th>Địa chỉ</th>
                <th>Ngày đăng kí</th>
                <th>Hành động</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Nguyen Van A</td>
                <td>Link</td>
                <td>22</td>
                <td>Ha Nam</td>
                <td>01/01/2023</td>
                <td>
                  <select name="" id="">
                    <option value="">Duyệt</option>
                    <option value="">Không duyệt</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BrowserCTV;
