import React from "react";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../../utils/const";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import addCusStyles from "./AddCustomer.module.scss";

const AddCustomer = () => {
  return (
    <div className={addCusStyles["addCus"]}>
      <div className="arrow">
        <Link to={"/danh-sach-kh"}>
          <img src={`${PUBLIC_URL}/icons/arrow.svg`} alt="" />
          Quay lại
        </Link>
      </div>
      <div className="box">
        <div className="title">
          Thêm mới khách hàng <img src={`${PUBLIC_URL}/icons/add.svg`} alt="" />
        </div>
        <div className={addCusStyles["addCus__detail"]}>
          <div className={addCusStyles["addCus__item"]}>
            <Input default label="Họ tên" placeholder="Họ tên kh" />
            <Input default label="Số điện thoại" placeholder="Số điện thoại" />
            <Input default label="Địa chỉ" placeholder="Địa chỉ" />
            <Input default label="Tuổi" placeholder="Tuổi" />
          </div>
          <div className={addCusStyles["addCus__item"]}>
            <Input default label="Ngày bookking" value="15/06/2023" />
            <label>Điểm đau mong muốn</label>
            <textarea
              name=""
              id=""
              placeholder="Điểm đau mong muốn ...."
            ></textarea>
            <label>Ghi chú</label>
            <textarea name="" id="" placeholder="Ghi chú ...."></textarea>
          </div>
          <div className={addCusStyles["addCus__btn"]}>
            <Button info>Lưu thông tin</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCustomer;
