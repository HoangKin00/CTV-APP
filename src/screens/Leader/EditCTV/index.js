import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { PUBLIC_URL } from "../../../utils/const";
import editCtvStyles from "./Edit.module.scss";

const EditCTV = () => {
  return (
    <div className={editCtvStyles["edit"]}>
      <div className="arrow">
        <Link to={"/chi-tiet-ctv"}>
          <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt="" />
          Quay lại
        </Link>
      </div>
      <div className="box">
        <div className="title">Sửa thông tin CTV</div>
        <div className={editCtvStyles["edit__des"]}>
          <div className={editCtvStyles["edit__item"]}>
            <table className="table">
              <tbody>
                <tr>
                  <th>Tên CTV:</th>
                  <td>Nguyễn Van A</td>
                </tr>
                <tr>
                  <th>Mã CTV:</th>
                  <td>kn123</td>
                </tr>
                <tr>
                  <th>Số điện thoại:</th>
                  <td>0987654321</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>nguyena@scigroup.com</td>
                </tr>
                <tr>
                  <th>Địa chỉ:</th>
                  <td>Hà Nội</td>
                </tr>
                <tr>
                  <th>Giới tính:</th>
                  <td>Nam</td>
                </tr>
                <tr>
                  <th>Trạng thái:</th>
                  <td>
                    <select name="" id="">
                      <option value="">Đang hoạt động</option>
                      <option value="">Không hoạt động</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={editCtvStyles["edit__item"]}>
            <table className="table">
              <tbody>
                <tr>
                  <th>Tên hợp đồng:</th>
                  <td>Hợp đồng 1</td>
                </tr>
                <tr>
                  <th>Số hợp đồng:</th>
                  <td>1</td>
                </tr>
                <tr>
                  <th>Ngày kí:</th>
                  <td>01/01/2022</td>
                </tr>
                <tr>
                  <th>Ngày kết thúc:</th>
                  <td>01/01/2023</td>
                </tr>
                <tr>
                  <th>Tình trạng hợp đồng:</th>
                  <td>Đang thực hiện</td>
                </tr>
                <tr>
                  <th>Người chịu trách nhiệm:</th>
                  <td>Nguyen Van B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={editCtvStyles["edit__btn"]}>
          <Button info>Lưu thông tin</Button>
        </div>
      </div>
    </div>
  );
};

export default EditCTV;
