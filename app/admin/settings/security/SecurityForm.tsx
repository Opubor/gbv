"use client";
import { updatePasswordSchema } from "@/schema/user";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
};

function SecurityForm({ id }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(updatePasswordSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/user/${id}/updatePassword`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
          confirmPassword: data.confirmPassword,
        }),
      });
      reset();
      router.refresh();
      setLoading(false);
      const res = response.status;
      if (res === 400) {
        setSuccess(false);
        setError(true);
        return setTimeout(() => {
          setError(false);
        }, 7000);
      } else res === 200;
      {
        setError(false);
        setSuccess(true);
        return setTimeout(() => {
          setSuccess(false);
        }, 7000);
      }
    } catch (error) {
      return console.log(error);
    }
  };
  return (
    <div className="px-3 lg:px-6">
      {error && (
        <div className="bg-red-50 rounded-sm w-full border-l-4 border-l-red-600 px-4 py-2 text-xs text-red-600">
          <p className="text-base font-semibold text-red-900">Error</p>
          <p>Wrong password</p>
        </div>
      )}
      {success && (
        <div className="bg-green-50 rounded-sm w-full border-l-4 border-l-green-600 px-4 py-2 text-xs text-green-600">
          <p className="text-base font-semibold text-green-900">Success</p>
          <p>Password updated successfully</p>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mt-3">
          <label className="text-xs">Current Password</label>
          <input
            {...register("currentPassword", { required: true })}
            className="bg-gray-50 border border-themeColor px-2 py-1 rounded-md"
            type="password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs">
              Please enter your current password
            </p>
          )}
        </div>

        <div className="flex flex-col mt-3">
          <label className="text-xs">New Password</label>
          <input
            {...register("newPassword", { required: true })}
            className="bg-gray-50 border border-themeColor px-2 py-1 rounded-md"
            type="password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs">Password is required.</p>
          )}
        </div>

        <div className="flex flex-col mt-3">
          <label className="text-xs">Confirm Password</label>
          <input
            {...register("confirmPassword", { required: true })}
            className="bg-gray-50 border border-themeColor px-2 py-1 rounded-md"
            type="password"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs">Passwords must match.</p>
          )}
        </div>

        <div className="flex justify-center pb-8">
          <button className="bg-themeColor py-2 px-8 hover:bg-lightThemeColor text-white font-semibold text-xs lg:text-sm rounded-sm mt-4">
            {loading ? "loading..." : "Update Password"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SecurityForm;
