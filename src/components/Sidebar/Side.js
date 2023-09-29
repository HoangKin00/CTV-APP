import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menu } from "../../routes/route";
import { PUBLIC_URL } from "../../utils/const";
import "./side.css";

const Side = () => {
  const [active, setActive] = useState(false);
  const navToggle = () => {
    if (window.innerWidth < 1200) setActive(!active);
  };

  return (
    <nav className="nav">
      {active && <div onClick={navToggle} className="nav__bg"></div>}
      <ul className={active ? "nav__menu nav__active" : "nav__menu"}>
        <div className="logo">
          <img
            src={`${PUBLIC_URL}/images/logo.svg`}
            alt=""
            className="logoimg"
          />
        </div>
        <li>
          {menu.map((item) => (
            <div key={item.name} className="nav__item">
              <Link to={item.link} onClick={navToggle} className="nav__link">
                <img src={item.icon} alt="" className="nav__icon" />
                <span>{item.name}</span>
              </Link>
            </div>
          ))}
        </li>
      </ul>
      <div
        onClick={navToggle}
        className={active ? "nav__toggler toggler" : "nav__toggler"}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Side;
