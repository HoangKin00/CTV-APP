import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { PUBLIC_URL } from "../../../utils/const";
import addStyles from "./Add.module.scss";

const Add = () => {
  return (
    <div className={addStyles["add"]}>
      <div className="arrow">
        <Link to={"/danh-sach-tai-khoan"}>
          <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt="" />
          Quay lại
        </Link>
      </div>
      <div className="box">
        <div className="title">
          Thêm mới tài khoản <span>+</span>
        </div>
        <div className={addStyles["add__detail"]}>
          <div className={addStyles["add__item"]}>
            <Input default label="Họ tên" placeholder="Họ tên" />
            <Input default label="Số điện thoại" placeholder="Số điện thoại" />
            <Input default label="Tuổi" placeholder="Tuổi" />
            <Input default label="Địa chỉ" placeholder="Địa chỉ" />
          </div>
          <div className={addStyles["add__item"]}>
            <Input default label="Email" value="nguyena@scigroup.com" />
            <Input default label="Mật khẩu" value="12345scigroup" />
            <div className="selectAdd">
              <label htmlFor="">Chức vụ</label>
              <select name="" id="">
                <option value="">CTV</option>
                <option value="">Quản Lý</option>
                <option value="">Giám đốc</option>
              </select>
            </div>
          </div>
          <div className={addStyles["add__btn"]}>
            <Button info>Lưu thông tin</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
