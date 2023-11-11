import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { loginSchema } from "../../../utils/validation";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {};
  return (
    <div
      className="
   flex
   min-h-screen
   w-full
   items-center
   justify-center
   px-4
   "
    >
      <div
        className="
    flex
    w-[400px]
    flex-col
    rounded-lg
    bg-white
    px-6
    py-8
    shadow-lg
    "
      >
        {/* Top */}
        <div className="flex justify-center items-center mb-10">
          <h1 className="text-3xl font-bold">Login</h1>
          {/* Top End */}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
                flex
                w-full
                flex-col
                gap-4
                "
        >
          <div className="w-full">
            <input
              type="text"
              placeholder="Email Address"
              {...register("email")}
              className="input-field"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="w-full">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="input-field"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="flex w-full flex-col items-start gap-1">
            <input
              type="submit"
              value="Login"
              className="input-field cursor-pointer bg-black text-white"
            />
            <Link
              href={`/auth/resetpassword`}
              className="text-center text-sm text-gray-500"
            >
              Forget password?
            </Link>
          </div>

          {/* Form End */}
        </form>

        {/* Bottom */}
        <div className="input-field google mt-6 flex cursor-pointer items-center justify-between hover:bg-slate-100">
          <div className="flex items-center gap-2">
            <FcGoogle />
            <p className="text-sm">Continue with Google</p>
          </div>
          <HiOutlineArrowNarrowRight className="arrow hidden text-gray-400" />
        </div>

        <div className="mt-5 flex gap-1 text-sm">
          <p className="text-gray-500">No Account?</p>
          <Link href={`/auth/signup`} className="font-medium">
            Sign up
          </Link>
        </div>
        {/* Bottom end */}
      </div>
    </div>
  );
};

export default Login;
