"use client";
import { TUserSchema, editProfileSchema, userSchema } from "@/schema/user";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { BiLockAlt } from "react-icons/bi";

type Props = {
  user: TUserSchema | null;
  id: string;
};

function ProfileForm({ user, id }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editProfileSchema),
    defaultValues: user || {},
  });

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/user/${id}/editProfile`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          gender: data.gender,
        }),
      });
      router.refresh();
      setLoading(false);
      return console.log(await response.json());
    } catch (error) {
      return console.log(error);
    }
  };
  return (
    <div className="px-3 lg:px-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-4">
          <div className="flex flex-col mt-3 w-full">
            <label className="text-xs">First Name</label>
            <input
              {...register("firstName", { required: true })}
              className="bg-gray-50 border border-themeColor px-2 py-1 rounded-md"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">First name is required.</p>
            )}
            {errors.password && (
              <p className="text-red-500 text-xs">First name is required.</p>
            )}
          </div>

          <div className="flex flex-col mt-3 w-full">
            <label className="text-xs">Last Name</label>
            <input
              {...register("lastName", { required: true })}
              className="bg-gray-50 border border-themeColor px-2 py-1 rounded-md"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">Last name is required.</p>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-4">
          <div className="flex flex-col mt-3  w-full">
            <label className="text-xs">Email</label>

            <div className="bg-gray-50 border border-themeColor px-2 py-1 rounded-md cursor-not-allowed flex justify-between items-center">
              <p>{user?.email}</p>
              <BiLockAlt className="text-gray-500" />
            </div>
          </div>

          <div className="flex flex-col mt-3 w-full">
            <label className="text-xs">Phone Number</label>
            <input
              {...register("phoneNumber")}
              className="bg-gray-50 border border-themeColor px-2 py-1 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">Phone Number is required.</p>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-4">
          <div className="flex flex-col w-full">
            <label className="text-xs">Gender</label>
            <input
              {...register("gender")}
              className="bg-gray-50 border border-themeColor px-2 py-1 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">Please select a gender.</p>
            )}
          </div>
        </div>

        <div className="flex justify-center pb-8">
          <button className="bg-themeColor py-2 px-8 hover:bg-lightThemeColor text-white font-semibold text-xs lg:text-sm rounded-sm mt-4">
            {loading ? "loading..." : "Update Profile"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfileForm;
