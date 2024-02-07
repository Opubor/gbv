"use client";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserSchema } from "@/schema/user";
import Image from "next/image";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { ImSpinner9 } from "react-icons/im";

type Props = {
  className?: string;
  callbackUrl?: string;
  classname?: string;
};

function Login(props: Props) {
  const searchParams = useSearchParams();
  // const error = searchParams.get("error");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginUserSchema) });

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email: data?.email,
        password: data?.password,
        redirect: false,
        callbackUrl: props.callbackUrl ?? "/",
      });

      if (res?.ok) {
        router.push("/admin/dashboard");
        setSuccess(true);
        setError(false);

        router.refresh();
        return setLoading(false);
      } else {
        setLoading(false);
        setSuccess(false);
        return setError(true);
      }
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div className={`${props.classname} bg-white`}>
      {success && (
        <div className="bg-green-50 rounded-sm w-full border-l-4 border-l-green-600 px-4 py-2 text-xs text-green-600">
          <p className="text-base font-semibold text-green-900">Success</p>
          <p>Login Successful</p>
        </div>
      )}
      {error && (
        <div className="bg-red-50 rounded-sm w-full border-l-4 border-l-red-600 px-4 py-2 text-xs text-red-600">
          <p className="text-base font-semibold text-red-900">Error</p>
          <p> Invalid Credentials</p>
        </div>
      )}
      {/* ===Form=== */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mt-3">
          <label className="text-sm p-0.5">E-mail</label>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder={"Enter your email"}
            className="bg-slate-100 text-black rounded-md px-6 py-3 w-full text-sm focus:border-none focus:outline-purple-500"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">Please enter your E-mail</p>
          )}
        </div>

        <div className="flex flex-col mt-3">
          <label className="text-sm p-0.5">Password</label>
          <input
            {...register("password", { required: true })}
            className="bg-slate-100 text-black rounded-md px-6 py-3 w-full text-sm focus:border-none focus:outline-purple-500"
            type="password"
            placeholder="******"
          />
          {errors.password && (
            <p className="text-red-500 text-xs">Please enter your password</p>
          )}
        </div>
        <div className="">
          <Link
            href="/auth/forgot-password"
            className="text-blue-500 underline text-xs"
          >
            Forgot password?
          </Link>
        </div>

        <button className="bg-themeColor py-2 w-full hover:bg-lightThemeColor text-white font-semibold text-sm rounded-md mt-2">
          {loading ? (
            <div className="animate-spin flex justify-center">
              <ImSpinner9 className="text-sm" size={20} />
            </div>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      <div className="flex justify-center items-center w-full mt-2">
        <Link className="text-xs text-blue-600" href={"/"}>
          Back to Home page
        </Link>
      </div>
    </div>
  );
}

export default Login;
