import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { PUBLIC_URL } from "../../utils/const";

const Register = (props) => {
  return (
    <div className="form">
      <div className="formLogo">
        <img src={`${PUBLIC_URL}/images/logo.svg`} alt="" />
      </div>
      <h1 className="formTitle">ĐĂNG KÝ</h1>
      <>
        <Input
          default
          type="text"
          label="Họ tên"
          name="name"
          placeholder="Họ tên"
        />
        <Input
          default
          type="email"
          label="Email"
          name="email"
          placeholder="Email"
        />
        <Input
          default
          type="number"
          label="Số điện thoại"
          name="phone"
          placeholder="Số điện thoại"
        />
        <Input
          default
          type="text"
          label="Địa chỉ"
          name="address"
          placeholder="Địa chỉ"
        />
        <select name="source" id="source">
          <option value="">Nguồn đăng kí</option>
          <option value="Khách hàng cũ">Khách hàng cũ</option>
          <option value="click theo Link">click theo Link</option>
        </select>
        <Button info>Đăng ký</Button>
        <p class="formLink">
          Bạn đã có tài khoản?<Link to="/dang-nhap"> Đăng nhập</Link>
        </p>
      </>
    </div>
  );
};

export default Register;
