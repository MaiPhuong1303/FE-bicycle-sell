import { User } from "../Login/login";
import classNames from "classnames/bind";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const signUp = async (user: User) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]") as User[];
  const existingUser = users.find((u) => u.username === user.username);
  if (existingUser) {
    throw new Error("User already exists");
  }
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  return { message: "User registered successfully" };
};

export function SignUpPage() {
  const navigate = useNavigate();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(schema),
  });

  const { mutate, error } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      navigate("/login");
      reset();
      toast.success("Register success");
    },
  });

  const onSubmit = async (data: User) => {
    mutate(data);
  };

  return (
    <div className={cx("container")}>
      <form onSubmit={handleSubmit(onSubmit)} className={cx("form")}>
        <div className={cx("heading")}>
          <h2>Sign Up</h2>
          {error && <p className={cx("error")}>{error.message}</p>}
        </div>
        <div className={cx("formGroup")}>
          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" {...register("fullName")} />
          {errors.fullName && (
            <p className={cx("error")}>{errors.fullName.message}</p>
          )}
        </div>
        <div className={cx("formGroup")}>
          <label htmlFor="username">Username</label>
          <input id="username" {...register("username")} />
          {errors.username && (
            <p className={cx("error")}>{errors.username.message}</p>
          )}
        </div>
        <div className={cx("formGroup")}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" {...register("password")} />
          {errors.password && (
            <p className={cx("error")}>{errors.password.message}</p>
          )}
        </div>
        <button type="submit" className={cx("submitButton")}>
          Sign Up
        </button>
        <div>
          Already have an account?{" "}
          <Link to="/login" className={cx("link")}>
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
