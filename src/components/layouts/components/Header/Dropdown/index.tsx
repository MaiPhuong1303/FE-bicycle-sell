import React from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { AiOutlineUser } from "react-icons/ai";
import { Stack } from "@mui/material";

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
      <Stack direction="row" alignItems="center" gap={0.5}>
        <AiOutlineUser />

        <span className={cx("dropbtn")}>{title}</span>
      </Stack>
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
