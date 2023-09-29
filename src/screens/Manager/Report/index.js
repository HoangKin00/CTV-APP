import React from "react";
import { Link } from "react-router-dom";
import Search from "../../../components/Input/Search";
import { PUBLIC_URL } from "../../../utils/const";
import reportStyles from "./Report.module.scss";

const Report = () => {
  return (
    <div className={reportStyles["report"]}>
      <div className="secrch">
        <Search type="search" placeholder="Tìm kiếm" />
      </div>
      <div>
        <div className="box">
          <div className="title">Nhóm CTV</div>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>STT</th>
                <th>Tên nhóm</th>
                <th>Trưởng nhóm</th>
                <th>Thành viên</th>
                <th>Chi tiết</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Nhóm 1</td>
                <td>Nguyen Van A</td>
                <td>5</td>
                <td>
                  <Link to={"/bao-cao-chi-tiet"}>
                    <img src={`${PUBLIC_URL}/icons/detail.svg`} alt="" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Nhóm 2</td>
                <td>Nguyen Van A</td>
                <td>5</td>
                <td>
                  <Link to={"/bao-cao-chi-tiet"}>
                    <img src={`${PUBLIC_URL}/icons/detail.svg`} alt="" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <div className="box">
          <div className="title">CTV</div>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>STT</th>
                <th>Tên NV</th>
                <th>Địa chỉ</th>
                <th>Thuộc nhóm</th>
                <th>Trưởng nhóm</th>
                <th>Chi tiết</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Nguyen Van B</td>
                <td>Ha Nam</td>
                <td>Nhóm 1</td>
                <td>Nguyen Van A</td>
                <td>
                  <Link to={"/bao-cao-chi-tiet"}>
                    <img src={`${PUBLIC_URL}/icons/detail.svg`} alt="" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Nguyen Van C</td>
                <td>Ha Nam</td>
                <td>Nhóm 2</td>
                <td>Nguyen Van A</td>
                <td>
                  <Link to={"/bao-cao-chi-tiet"}>
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
export default Report;
