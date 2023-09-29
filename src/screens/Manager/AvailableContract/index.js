import React from "react";
import Button from "../../../components/Button";
import { PUBLIC_URL } from "../../../utils/const";
import avContractStyles from "./AvailableContract.module.scss";

const AvailableContract = () => {
  return (
    <div className={avContractStyles["availableContract"]}>
      <div>
        <div className="title">Hợp đồng 1</div>
        <div className="box">
          <div className={avContractStyles["availableContract__item"]}>
            <img src={`${PUBLIC_URL}/images/hopdong.jpg`} alt="" />
          </div>
          <div className={avContractStyles["availableContract__button"]}>
            <Button danger>Xóa</Button>
          </div>
        </div>
      </div>
      <div>
        <div className="title">Hợp đồng 2</div>
        <div className="box">
          <div className={avContractStyles["availableContract__item"]}>
            <img src={`${PUBLIC_URL}/images/hopdong.jpg`} alt="" />
          </div>
          <div className={avContractStyles["availableContract__button"]}>
            <Button danger>Xóa</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableContract;
