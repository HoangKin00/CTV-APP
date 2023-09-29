import React from "react";
import { Formik } from "formik";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { PUBLIC_URL } from "../../utils/const";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "../../features/auth/authApi";
import {
  currentUserSelector,
  loadedAuthSelector
} from "../../features/auth/authSlice";
import { useState } from "react";

function Login() {
  const dispatch = useDispatch();
  const loginData = useSelector(currentUserSelector);
  const loadedAuth = useSelector(loadedAuthSelector);

  return (
    <>
      <div className="form">
        <div className="formLogo">
          <img src={`${PUBLIC_URL}/images/logo.svg`} alt="" />
        </div>
        <h1 className="formTitle">ĐĂNG NHẬP</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required("Không được để trống"),
            password: Yup.string()
              .required("Chưa nhập mật khẩu.")
              .min(6, "Mật khẩu quá ngắn - ít nhất phải 6 ký tự.")
              .matches(/(?=.*[0-9])/, "Mật khẩu phải chứa nhất một số.")
          })}
          onSubmit={(data) => {
            dispatch(login(data));
          }}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit
            } = props;

            return (
              <>
                <form onSubmit={handleSubmit}>
                  <div>{loadedAuth && loginData.name}</div>
                  <Input
                    default
                    label="Email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email && "error"}
                    errorMessage={errors.email}
                  />
                  <Input
                    default
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password && "error"}
                    errorMessage={errors.password}
                  />
                  <Button info disabled={isSubmitting}>
                    Đăng nhập
                  </Button>
                </form>
              </>
            );
          }}
        </Formik>
        <p class="formLink">
          Bấm vào <Link to="/dang-ky">Tạo tài khoản mới</Link>
        </p>
      </div>
    </>
  );
}

export default Login;
