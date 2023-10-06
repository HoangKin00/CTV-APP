import React from "react";
import Search from "../../components/Input/Search";

const Admin = () => {
  return (
    <div className="list">
      <div className="title">Danh sách tài khoản</div>
      <div className="box">
        <div className="filter">
          <Search type="search" placeholder="Tìm kiếm" />
          <div className="select">
            <select name="" id="">
              <option value="">Chức vụ</option>
              <option value="">CTV</option>
              <option value="">Quản Lý</option>
              <option value="">Giám đốc</option>
            </select>
          </div>
        </div>
        <div className="list__detail">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>STT</th>
                <th>Tên NV</th>
                <th>Email</th>
                <th>Mật khẩu</th>
                <th>Địa chỉ</th>
                <th>Chức vụ</th>
                <th>Ngày tạo</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Nguyen Van A</td>
                <td>john@example.com</td>
                <td>123456789</td>
                <td>Hà Nội</td>
                <td>CTV</td>
                <td>01/01/2021</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nguyen Van A</td>
                <td>john@example.com</td>
                <td>123456789</td>
                <td>Hà nam</td>
                <td>CTV</td>
                <td>01/01/2021</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nguyen Van A</td>
                <td>john@example.com</td>
                <td>123456789</td>
                <td>Hà Nội</td>
                <td>CTV</td>
                <td>01/01/2021</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Nguyen Van A</td>
                <td>john@example.com</td>
                <td>123456789</td>
                <td>Hà Nam</td>
                <td>CTV</td>
                <td>01/01/2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
