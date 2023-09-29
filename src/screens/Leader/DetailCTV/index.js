import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import detailCtvStyles from "./Detail.module.scss";

const DetailCTV = () => {
  return (
    <div className={detailCtvStyles["detail"]}>
      <div className="title">Thông tin chi tiết</div>
      <div className="box">
        <div className={detailCtvStyles["detail__des"]}>
          <div className={detailCtvStyles["detail__item"]}>
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
                  <td>Đang hoạt động</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={detailCtvStyles["detail__item"]}>
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
        <Link
          to={"/sua-thong-tin-trang-thai-ctv"}
          className={detailCtvStyles["detail__btn"]}
        >
          <Button info>Sửa thông tin</Button>
        </Link>
      </div>
    </div>
  );
};

export default DetailCTV;
