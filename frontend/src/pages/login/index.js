import "./styles.css";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import LoginInput from "../../components/loginInput";

const loginInfos = {
  email: "",
  password: "",
};

export default function Login() {
  const [login, setLogin] = useState(loginInfos);
  const { email, password } = login;
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrap">
          <div className="login_1">
            <img src="../../icons/facebook.svg" alt="" />
            <span>
              Facebook helps you connect and share with the people in you life
            </span>
          </div>
          <div className="login_2">
            <div className="login_2_wrap">
              <Formik
                initialValues={{
                  email,
                  password,
                }}
              >
                {(formik) => (
                  <Form>
                    <LoginInput
                      type="text"
                      name="email"
                      placeholder="Email address or Phone number"
                      onChange={handleLoginChange}
                    />
                    <LoginInput
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={handleLoginChange}
                    />
                    <button type="submit" className="blu_btn">
                      Log In
                    </button>
                  </Form>
                )}
              </Formik>
              <Link to="/forgot" className="forgot_password">
                Forgotten Password
              </Link>
              <div className="sign_splitter"></div>
              <button className="blu_btn open_signup">Create Account</button>
            </div>
            <Link to="/" className="sign_extra">
              <b>Create a Page </b>
              for a celebrity, brand or buisness
            </Link>
          </div>
        </div>
        <div className="register"></div>
      </div>
    </div>
  );
}
