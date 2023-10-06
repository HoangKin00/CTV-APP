import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Side from "../components/Sidebar/Side";
import homeStyles from "./Home.module.scss";
import { role } from "../routes/route";

const Home = () => {
  return (
    <div className={homeStyles["home"]}>
      <div className={homeStyles["home__side"]}>
        <Side />
      </div>

      <div className={homeStyles["home__box"]}>
        <div className={homeStyles["home__header"]}>
          <Header role={role} />
        </div>
        <div className={homeStyles["home__main"]}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
