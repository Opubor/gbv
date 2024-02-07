"use client";
import { getHelpSchema } from "@/schema/getHelp";
import { victimDetailsSchema } from "@/schema/victimDetails";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { FaHandHoldingHeart } from "react-icons/fa";
import { LuHelpingHand } from "react-icons/lu";
import { toast } from "react-toastify";

function GetHelpForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(getHelpSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/getHelp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: data?.username,
          email: data?.email,
          phone: data?.phone,
          address: data?.address,
          natureOfIncident: data?.natureOfIncident,
          safetyConcerns: data?.safetyConcerns,
          additionalDetails: data?.additionalDetails,
          emotionalSupport: data?.emotionalSupport,
          infoLocal: data?.infoLocal,
          legalAdvice: data?.legalAdvice,
          shelter: data?.shelter,
          medicalSupport: data?.medicalSupport,
          otherSupport: data?.otherSupport,
          immediateDanger: data?.immediateDanger,
          contactAgreement: data?.contactAgreement,
        }),
      });
      setLoading(false);

      if (response.status === 200) {
        toast.success("Request Sent", {
          position: "top-right",
        });
        reset();
        return router.refresh();
      } else if (response?.status === 404) {
        return toast.error("Request error", {
          position: "top-right",
        });
      }
    } catch (error) {
      return toast.error("Error in registration", {
        position: "top-right",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 lg:col-span-1">
          {/* ===Name=== */}
          <div className="flex flex-col mt-2 w-full">
            <label className="text-xs">Name</label>
            <input
              {...register("username", { required: true })}
              className="border border-themeColor px-2 py-1"
            />
            {errors.username && (
              <p className="text-red-500 text-xs">Required***.</p>
            )}
          </div>

          {/* ===Email/Phone=== */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-col mt-2 w-full">
              <label className="text-xs">Email</label>
              <input
                {...register("email", { required: true })}
                className="border border-themeColor px-2 py-1"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">Required***.</p>
              )}
            </div>
            <div className="flex flex-col mt-2 w-full">
              <label className="text-xs">Phone Number</label>
              <input
                {...register("phone", { required: true })}
                className="border border-themeColor px-2 py-1"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">Required***.</p>
              )}
            </div>
          </div>

          {/* ===Location=== */}
          <div className="flex flex-col mt-2 w-full">
            <label className="text-xs">Address</label>
            <textarea
              {...register("address", { required: true })}
              className="border border-themeColor px-2 py-1"
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-xs">Required***.</p>
            )}
          </div>

          {/* ===Nature of Incident=== */}
          <div className="flex flex-col mt-2 w-full">
            <label className="text-xs">
              Nature of Incident/ Incident details
            </label>
            <textarea
              {...register("natureOfIncident")}
              rows={5}
              placeholder="Please provide details about the incident, including the date, time, and a brief description of what occurred. This information will help us better understand your situation and provide appropriate support."
              className="border border-themeColor px-2 py-1 text-sm"
            ></textarea>
            {errors.natureOfIncident && (
              <p className="text-red-500 text-xs">Required***.</p>
            )}
          </div>

          {/* ===Safety Concerns=== */}
          <div className="flex flex-col mt-2 w-full">
            <label className="text-xs">Safety Concerns</label>
            <textarea
              {...register("safetyConcerns")}
              rows={5}
              placeholder="Do you feel safe in your current location?...  Are there specific safety measures or considerations we should be aware of?"
              className="border border-themeColor text-sm px-2 py-1"
            ></textarea>
            {errors.safetyConcerns && (
              <p className="text-red-500 text-xs">Required***.</p>
            )}
          </div>

          {/* ===Additional Details=== */}
          <div className="flex flex-col mt-2 w-full">
            <label className="text-xs">Additional Details</label>
            <textarea
              {...register("additionalDetails")}
              rows={5}
              placeholder="Feel free to share any other relevant information or specific concerns you would like us to be aware of. Your input is valuable in ensuring we provide the most appropriate assistance and support."
              className="border border-themeColor text-sm px-2 py-1"
            ></textarea>
            {errors.additionalDetails && (
              <p className="text-red-500 text-xs">Required***.</p>
            )}
          </div>

          {/* ===Support needed=== */}
          <h1 className="font-bold mt-2">Support Needed</h1>
          <div className="flex justify-between items-center gap-4">
            {/* ===Emotional Support=== */}
            <div className="flex items-center gap-2 w-full mt-2">
              <label className="text-sm">Emotional Support</label>
              <input
                {...register("emotionalSupport")}
                type="checkbox"
                className="border border-themeColor text-sm px-2 py-1"
              />
              {errors.emotionalSupport && (
                <p className="text-red-500 text-xs">Required***.</p>
              )}
            </div>

            {/* ===Information about local resources=== */}
            <div className="flex items-center gap-2 w-full mt-2">
              <label className="text-sm">
                Information about local resources
              </label>
              <input
                {...register("infoLocal")}
                type="checkbox"
                className="border border-themeColor text-sm px-2 py-1"
              />
              {errors.infoLocal && (
                <p className="text-red-500 text-xs">Required***.</p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center gap-4">
            {/* ===Legal advice=== */}
            <div className="flex items-center gap-2 w-full mt-2">
              <label className="text-sm">Legal advice</label>
              <input
                {...register("legalAdvice")}
                type="checkbox"
                className="border border-themeColor text-sm px-2 py-1"
              />
              {errors.legalAdvice && (
                <p className="text-red-500 text-xs">Required***.</p>
              )}
            </div>

            {/* ===Shelter/housing assistance=== */}
            <div className="flex items-center gap-2 w-full mt-2">
              <label className="text-sm">Shelter/housing assistance</label>
              <input
                {...register("shelter")}
                type="checkbox"
                className="border border-themeColor text-sm px-2 py-1"
              />
              {errors.shelter && (
                <p className="text-red-500 text-xs">Required***.</p>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center gap-4">
            {/* ===Medical support=== */}
            <div className="flex items-center gap-2 w-full mt-2">
              <label className="text-sm">Medical support</label>
              <input
                {...register("medicalSupport")}
                type="checkbox"
                className="border border-themeColor text-sm px-2 py-1"
              />
              {errors.medicalSupport && (
                <p className="text-red-500 text-xs">Required***.</p>
              )}
            </div>

            {/* ===Others=== */}
            <div className="flex items-center gap-2 w-full mt-2">
              {/* <label className="text-sm">Other (please specify)</label> */}
              <input
                {...register("otherSupport")}
                placeholder="Others (please specify)"
                className="border border-themeColor text-xs px-2 py-1"
              />
              {errors.otherSupport && (
                <p className="text-red-500 text-xs">Required***.</p>
              )}
            </div>
          </div>

          {/* ===Are you in immediate danger=== */}
          <h1 className="font-bold mt-4">Immediate Concerns</h1>
          <div className="flex items-center gap-2 w-full mt-1">
            <label className="text-sm">Are you in immediate danger?</label>
            <input
              {...register("immediateDanger")}
              type="checkbox"
              className="border border-themeColor text-sm px-2 py-1"
            />
            {errors.immediateDanger && (
              <p className="text-red-500 text-xs">Required***.</p>
            )}
          </div>

          {/* ===I agree to be contacted for further assistance and support=== */}
          <div className="flex items-center gap-2 w-full mt-6">
            <input
              {...register("contactAgreement")}
              type="checkbox"
              className="border border-themeColor text-sm px-2 py-1"
            />
            <label className="text-sm">
              I agree to be contacted for further assistance and support.
            </label>
            {errors.contactAgreement && (
              <p className="text-red-500 text-xs">Required***.</p>
            )}
          </div>

          {/* Button */}
          <div className="mt-4 flex  items-center">
            <button className="bg-themeColor hover:bg-darkTheme font-bold px-16  py-2 text-white text-sm rounded-md flex justify-center items-center gap-2">
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
        </div>

        <div className="hidden lg:block">
          <img src="/hands.jpg" className="border-4 border-purple-300" />
        </div>
      </div>
    </form>
  );
}

export default GetHelpForm;
