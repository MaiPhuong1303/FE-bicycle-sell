import { AiOutlineUser } from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className={cx("action")}>
      <div className={cx("text")}>
        <div className={cx("link")}>
          <span className={cx("box-icon")}>
            <AiOutlineUser />
          </span>
          <span className={cx("box-text")}>Đăng nhập / Đăng ký</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
