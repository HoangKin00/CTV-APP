import React from "react";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../utils/const";
import headerStyles from "./Header.module.scss";

const Header = ({ role }) => {
  return (
    <div className={headerStyles["header"]}>
      {role === "GIAM_DOC" && (
        <Link to={"/duyet-ctv"} className={headerStyles["header__report"]}>
          <img src={`${PUBLIC_URL}/icons/notii.svg`} alt="" />
          <sup>6</sup>
        </Link>
      )}
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
