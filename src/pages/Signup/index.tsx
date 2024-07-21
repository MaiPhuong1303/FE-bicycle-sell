import axios from "axios";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../../providers/ToastProvider";

const cx = classNames.bind(styles);

export interface User {
  fullName: string;
  username: string;
  password: string;
}

const signUp = async (user: User) => {
  try {
    const response = await axios.post("http://localhost:4000/users", user);
    return { message: "Đăng ký tài khoản thành công", data: response.data };
  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Đăng ký tài khoản thất bại");
    } else {
      throw new Error("Đăng ký tài khoản thất bại");
    }
  }
};

export function SignUpPage() {
  const { showToast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<User>({ fullName: "", username: "", password: "" });
  const [errors, setErrors] = useState<Partial<User>>({});
  const [error, setError] = useState<string | null>(null);

  const validate = (data: User) => {
    const newErrors: Partial<User> = {};
    if (!data.fullName) newErrors.fullName = "Họ và tên là bắt buộc";
    if (!data.username) newErrors.username = "Tên đăng nhập là bắt buộc";
    if (!data.password) newErrors.password = "Mật khẩu là bắt buộc";
    if (data.password && data.password.length < 6) newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      await signUp(formData);
      showToast("Đăng ký thành công", "success");
      navigate("/login");
      setFormData({ fullName: "", username: "", password: "" });
      setError(null);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className={cx("container")}>
      <form onSubmit={handleSubmit} className={cx("form")}>
        <div className={cx("heading")}>
          <h2>Đăng ký</h2>
          {error && <p className={cx("error")}>{error}</p>}
        </div>
        <div className={cx("formGroup")}>
          <label htmlFor="fullName">Họ và tên</label>
          <input id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
          {errors.fullName && (
            <p className={cx("error")}>{errors.fullName}</p>
          )}
        </div>
        <div className={cx("formGroup")}>
          <label htmlFor="username">Tên đăng nhập</label>
          <input id="username" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && (
            <p className={cx("error")}>{errors.username}</p>
          )}
        </div>
        <div className={cx("formGroup")}>
          <label htmlFor="password">Mật khẩu</label>
          <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && (
            <p className={cx("error")}>{errors.password}</p>
          )}
        </div>
        <button type="submit" className={cx("submitButton")}>
          Đăng ký
        </button>
        <div>
          Đã có tài khoản?{" "}
          <Link to="/login" className={cx("link")}>
            Đăng nhập
          </Link>
        </div>
      </form>
    </div>
  );
}
