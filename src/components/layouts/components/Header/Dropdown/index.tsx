import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";

const cx = classNames.bind(styles);

interface DropdownProps {
  title: string;
}

const logout = () => {
  localStorage.removeItem("loggedInUser");
  window.location.reload();
};

export const Dropdown = ({ title }: DropdownProps) => {
  const items = [
    { label: "Profile", onClick: () => {} },
    { label: "Logout", onClick: logout },
  ];
  return (
    <div className={cx("dropdown")}>
      <p className={cx("dropbtn")}>{title}</p>
      <div className={cx("dropdown-content")}>
        {items.map((item, index) => (
          <span key={index} onClick={item.onClick}>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};
