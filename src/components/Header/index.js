import React from "react";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../utils/const";
import headerStyles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={headerStyles["header"]}>
      <Link
        to={"/thong-tin-tai-khoan"}
        className={headerStyles["header__user"]}
      >
        <img src={`${PUBLIC_URL}/icons/user.svg`} alt="" />
        <p>Nguyen Van A</p>
      </Link>
    </div>
  );
};

export default Header;
