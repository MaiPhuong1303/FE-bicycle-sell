import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import classNames from "classnames/bind";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import styles from "./Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../../components/layouts/AuthLayout";

const cx = classNames.bind(styles);

export interface User {
  fullName: string;
  username: string;
  password: string;
}

const login = async (credentials: { username: string; password: string }) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]") as User[];
  const user = users.find(
    (u) =>
      u.username === credentials.username && u.password === credentials.password
  );
  if (!user) {
    throw new Error("Username or password not correct!");
  }
  localStorage.setItem("loggedInUser", JSON.stringify(user));
  return { message: "Login successful" };
};

const Login: React.FC = () => {
    const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: mutateLogin, error } = useMutation({
    mutationFn: login,
    onSuccess: () => {

        navigate('/')
      toast.success("Login success");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutateLogin({ username, password });
  };

  return (
    <AuthLayout>
    <div className={cx("container")}>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <div>
          <div className={cx("heading")}>
            <AiOutlineUser className={cx("icon")} />
            <h2 className={cx("title")}>Login</h2>
          </div>
          {error && <span className={cx("error")}>{error.message}</span>}
        </div>
        <input
          type="text"
          placeholder="Username"
          className={cx("input")}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={cx("input")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className={cx("button")}>
          Login
        </button>
        <div>
          Don't have an account?{" "}
          <Link to="/signup" className={cx("link")}>
            Sign up
          </Link>
        </div>
      </form>
    </div>
    </AuthLayout>
  );
};

export default Login;
