import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import classes from "./Login.module.scss";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { loginSchema } from "../../../utils/validation";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div className={classes.container}>
      <Image
        src="/assets/images/Logo.svg"
        className={classes.logo}
        alt="Logo"
        width={150}
        height={150}
      />

      <div className={classes.formContainer}>
        <div className={classes.top}>
          <h1 className={classes.title}>Sign in to DocTalker</h1>
          <p className={classes.loginFailed}>
            That email and password combination is incorrect.
          </p>
        </div>
        <div className={classes.google}>
          <FcGoogle className={classes.icon} />
          <p>Continue with Google</p>
        </div>
        <span>or</span>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={classes.inputContainer}>
            <input
              type="text"
              placeholder="Email"
              {...register("email")}
              className={errors.email ? classes.inputError : ""}
            />
            {errors.email && (
              <p className={classes.errorMsg}>{errors.email.message}</p>
            )}
          </div>

          <div className={classes.inputContainer}>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className={errors.password ? classes.inputError : ""}
            />
            {errors.password && (
              <p className={classes.errorMsg}>{errors.password.message}</p>
            )}
          </div>
          <input type="submit" value="Log in" />
        </form>
        <div className={classes.bottom}>
          <h1>Reset password</h1>
          <p>
            No account?<Link href={"/signin"}>Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
