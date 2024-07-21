import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../../components/layouts/AuthLayout";
import axios from "axios";
import styles from "./Login.module.scss";
import { useToast } from "../../providers/ToastProvider";

const cx = classNames.bind(styles);

export interface User {
  fullName: string;
  username: string;
  password: string;
}

const login = async (credentials: { username: string; password: string }) => {
  try {
    const response = await axios.get<User[]>("http://localhost:4000/users", {
      params: {
        username: credentials.username,
        password: credentials.password,
      },
    });

    const user = response.data.find(
      (u) => u.username === credentials.username && u.password === credentials.password
    );

    if (!user) {
      throw new Error("Tên đăng nhập hoặc mật khẩu không đúng!");
    }

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    return { message: "Đăng nhập thành công" };
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Đăng nhập thất bại");
  }
};

const Login: React.FC = () => {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ username, password });
      navigate("/");
      showToast("Đăng nhập thành công", "success");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <AuthLayout>
      <div className={cx("container")}>
        <form className={cx("form")} onSubmit={handleSubmit}>
          <div>
            <div className={cx("heading")}>
              <AiOutlineUser className={cx("icon")} />
              <h2 className={cx("title")}>Đăng nhập</h2>
            </div>
            {error && <span className={cx("error")}>{error}</span>}
          </div>
          <input
            type="text"
            placeholder="Tên đăng nhập"
            className={cx("input")}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className={cx("input")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className={cx("button")}>
            Đăng nhập
          </button>
          <div>
            Chưa có tài khoản?{" "}
            <Link to="/signup" className={cx("link")}>
              Đăng ký
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
