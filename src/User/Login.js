import React from "react";
import Hcss from "./login.module.css";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { GoSignIn } from "react-icons/go";
import mylogo from "../User/Assets/navlog.jpg";
import myimage from "../User/Assets/service-banner.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className={Hcss.umaincontainer}>
        <div className={Hcss.uinnerc}>
          <img src={mylogo} className={Hcss.navlogo} alt="logo" />
        </div>
        <div className={Hcss.loginCard}>
          {/* Image Part */}
          <div className={Hcss.loginCardleft}>
            <img src={myimage} alt="" />
          </div>

          {/* form Part */}
          <div className={Hcss.loginCardright}>
            <h3 className={Hcss.loginCardrightTitle}>
              {" "}
              <GoSignIn style={{ marginTop: "5px" }} size={20} /> Sign in to
              view your account
            </h3>
            <div className={Hcss.lci}>
              <span>
                <BsPersonCircle className={Hcss.inpIcon1} />
              </span>
              <input
                className={Hcss.loginInput}
                placeholder={"Username"}
                type="text"
              />
            </div>

            <div className={Hcss.lci}>
              <span>
                <AiFillLock className={Hcss.inpIcon2} />{" "}
              </span>{" "}
              <input
                className={Hcss.loginInput}
                placeholder={"Password"}
                type="password"
              />
            </div>

            <div className={Hcss.lci2}>
              <div className={Hcss.lci2L}>
                {" "}
                <input type="checkbox" />{" "}
                <span style={{ color: "white" }}>Remember me</span>{" "}
              </div>
              <div className={Hcss.lci2R}>
                {" "}
                <a href="" className={Hcss.lcifp}>
                  Forgot password?
                </a>{" "}
              </div>
            </div>

            <NavLink to={"/ds"}>
              <button className={Hcss.lcb}>LOGIN</button>{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
