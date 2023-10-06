import React from "react";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../../utils/const";
import detailCusStyles from "./DetailCus.module.scss";

const DetailCustomer = () => {
  return (
    <div className={detailCusStyles["detailCus"]}>
      <div className="arrow">
        <Link to={"/danh-sach-kh"}>
          <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt="" />
          Quay lại
        </Link>
      </div>
      <div className="title">Thông tin chi tiết</div>
      <div className="box">
        <div className={detailCusStyles["detailCus__des"]}>
          <div className={detailCusStyles["detailCus__item"]}>
            <table className="table">
              <tbody>
                <tr>
                  <th>Tên khách hàng:</th>
                  <td>Nguyễn Van A</td>
                </tr>
                <tr>
                  <th>Số điện thoại:</th>
                  <td>0987654321</td>
                </tr>
                <tr>
                  <th>Tuổi:</th>
                  <td>23</td>
                </tr>
                <tr>
                  <th>Địa chỉ:</th>
                  <td>Mỹ Đình - Hà Nội</td>
                </tr>
                <tr>
                  <th>Giới tính:</th>
                  <td>Nam</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={detailCusStyles["detailCus__item"]}>
            <table className="table">
              <tbody>
                <tr>
                  <th>Ngày booking:</th>
                  <td>01/01/2023</td>
                </tr>
                <tr>
                  <th>Điểm đau:</th>
                  <td>Nâng mũi</td>
                </tr>
                <tr>
                  <th>Ngày thực hiện:</th>
                  <td>01/02/2023</td>
                </tr>
                <tr>
                  <th>Bác sĩ thực hiện:</th>
                  <td>Nguyen Van C</td>
                </tr>
                <tr>
                  <th>Doanh thu:</th>
                  <td>30.000.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={detailCusStyles["detailCus__note"]}>
          <label>Ghi chú</label>
          <textarea name="" id=""></textarea>
        </div>
        {/* <div className={detailCusStyles["detailCus__btn"]}>
          <Button info>Sửa thông tin</Button>
        </div> */}
      </div>
    </div>
  );
};

export default DetailCustomer;
