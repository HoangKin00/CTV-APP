import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import infoStyles from "./Infomation.module.scss";

const Infomation = () => {
  return (
    <div className={infoStyles["info"]}>
      <div>
        <div className="title">Thông tin tài khoản</div>
        <div className="box">
          <div className={infoStyles["info__detail"]}>
            <div className={infoStyles["info__item"]}>
              <Input default label="Họ tên" value="Nguyen Van A" />
              <Input default label="Số điện thoại" value="0987654321" />
              <Input default label="Tuổi" value="22" />
              <Input default label="Địa chỉ" value="My Dinh - Ha Noi" />
            </div>
            <div className={infoStyles["info__item"]}>
              <Input default label="Email" value="nguyena@scigorup.com" />
              <Input default label="Mật khẩu" value="12345scigroup" />
              <Input default label="Chức vụ" value="CTV" />
            </div>
            <div className={infoStyles["info__btn"]}>
              <Button info>Thay đổi</Button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="title">Đổi mật khẩu</div>
        <div className="box">
          <div className={infoStyles["info__detail"]}>
            <div className={infoStyles["info__item"]}>
              <Input
                default
                label="Mật khẩu cũ"
                placeholder="Mật khẩu cũ"
                value=""
              />
              <Input
                default
                label="Mật khẩu mới"
                placeholder="Mật khẩu mới"
                value=""
              />
            </div>
            <div className={infoStyles["info__item"]}>
              <Input
                default
                label="Nhập lại mật khẩu"
                placeholder="Nhập lại mật khẩu"
                value=""
              />
            </div>
            <div className={infoStyles["info__btn"]}>
              <Button info>Thay đổi</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infomation;
