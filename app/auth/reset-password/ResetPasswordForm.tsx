"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { ImSpinner9 } from "react-icons/im";
import { resetPasswordSchema } from "@/schema/resetPassword";
import { FaHandHoldingHeart } from "react-icons/fa";

interface Props {
  token: string;
}

function ResetPasswordForm({ token }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(resetPasswordSchema) });

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/resetPassword/${token}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newPassword: data?.newPassword,
          confirmPassword: data?.confirmPassword,
        }),
      });
      setLoading(false);
      const res = response.status;
      if (res === 400) {
        setSuccess(false);
        return setError(await response.json());
      } else res === 200;
      {
        setError(false);
        return setSuccess(await response.json());
      }
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col xl:flex-row justify-center gap-2 xl:gap-16 items-center h-screen px-4 xl:px-44">
        <div className="pt-4 lg:pt-0 pb-4 lg:pb-0 w-full lg:w-2/4 flex flex-col justify-center lg:justify-start items-center lg:items-start">
          <FaHandHoldingHeart className="text-5xl" />

          <h1 className="text-xl lg:text-2xl xl:text-3xl font-extrabold">
            GBV SOFTWARE
          </h1>
          <p className="text-xs xl:text-sm mt-2 text-center lg:text-left">
            ~Seamless Solutions for Gender-Based Management Excellence~
          </p>
          <Image
            src="/unity1.jpg"
            alt="logo"
            className=" hidden lg:flex"
            width={3000}
            height={0}
            priority
          />
        </div>
        <div className="w-full lg:w-2/4">
          <h1 className="text-xl lg:text-3xl font-extrabold text-center mb-6">
            Reset Password
          </h1>
          {error && (
            <div className="bg-red-50 rounded-sm w-full border-l-4 border-l-red-600 px-4 py-2 text-xs text-red-600">
              <p className="text-base font-semibold text-red-900">{error}</p>
              <p></p>
            </div>
          )}
          {success && (
            <div className="bg-green-50 rounded-sm w-full border-l-4 border-l-green-600 px-4 py-2 text-xs text-green-600">
              <p className="text-base font-semibold text-green-900">Success</p>
              <p>{success}</p>
              <Link href={"/auth/login"} className="text-blue-700 underline">
                Sign In
              </Link>
            </div>
          )}

          {/* ===Form=== */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mt-3">
              <label className="text-xs">Password</label>
              <input
                {...register("newPassword", { required: true })}
                className="bg-gray-50 border border-themeColor px-2 py-2 rounded-md text-xs"
                placeholder="******"
                type="password"
              />
              {errors.newPassword && (
                <p className="text-red-500 text-xs">Password is required.</p>
              )}
            </div>

            <div className="flex flex-col mt-3">
              <label className="text-xs">Confirm Password</label>
              <input
                {...register("confirmPassword", { required: true })}
                className="bg-gray-50 border border-themeColor px-2 py-2 rounded-md text-xs"
                placeholder="******"
                type="password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs">Passwords must match.</p>
              )}
            </div>

            <button className="bg-themeColor py-2 w-full hover:bg-lightThemeColor text-white font-semibold text-sm rounded-md mt-2">
              {loading ? (
                <div className="animate-spin flex justify-center">
                  <ImSpinner9 className="text-sm" size={20} />
                </div>
              ) : (
                "Reset Password"
              )}
            </button>
          </form>

          <div className="flex justify-center items-center w-full mt-2">
            <Link className="text-xs text-blue-600" href={"/auth/login"}>
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordForm;
