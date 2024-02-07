"use client";
import { gbvInformationSchema } from "@/schema/gbvInformation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type PageProps = {
  id: string | undefined;
};

function GbvInfoForm({ id }: PageProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(gbvInformationSchema) });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/gbvInformation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          caseId: data?.caseId,
          referredBy: data?.referredBy,
          anyService: data?.anyService,
          redirected: data?.redirected,
          droppedOutVictim: data?.droppedOutVictim,
          policeReport: data?.policeReport,
          protectionOrder: data?.protectionOrder,
          suicideAttempt: data?.suicideAttempt,
          suicideMethod: data?.suicideMethod,
          suicideTime: data?.suicideTime,
          noOfAttempts: data?.noOfAttempts,
          satisfiedService: data?.satisfiedService,
          reasonNotSatisfied: data?.reasonNotSatisfied,

          medicalSupport: data?.medicalSupport,
          shelter: data?.shelter,
          psychological: data?.psychological,
          legalAssistance: data?.legalAssistance,
          securityProtection: data?.securityProtection,
          vocTraining: data?.vocTraining,
          infoLocal: data?.infoLocal,
          emotionalSupport: data?.emotionalSupport,
          otherSupport: data?.otherSupport,

          rsMedicalSupport: data?.rsMedicalSupport,
          rsShelter: data?.rsShelter,
          rsPsychological: data?.rsPsychological,
          rsLegalAssistance: data?.rsLegalAssistance,
          rsSecurityProtection: data?.rsSecurityProtection,
          rsVocTraining: data?.rsVocTraining,
          rsInfoLocal: data?.rsInfoLocal,
          rsEmotionalSupport: data?.rsEmotionalSupport,
          rsOtherSupport: data?.rsOtherSupport,
        }),
      });
      setLoading(false);
      if (response.status === 200) {
        toast.success("GBV Information added Successful", {
          position: "top-right",
        });
        router.push("/admin/cases");
        return router?.refresh();
      } else if (response?.status === 404) {
        return toast.error("Error during registration", {
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
      {/* Who referred the victim to this service?/ Was there any service provided */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            Who referred the victim to this service?
          </label>
          <select
            {...register("referredBy", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Health/Medical services"}>
              Health/Medical services
            </option>
            <option value={"Councelling services"}>Councelling services</option>
            <option value={"Police/Other security"}>
              Police/Other security
            </option>
            <option value={"Legal assistance"}>Legal assistance</option>
            <option value={"Teacher/school official"}>
              Teacher/school official
            </option>
            <option value={"Community/Camp leader"}>
              Community/Camp leader
            </option>
            <option value={"Safehouse/shelter"}>Safehouse/shelter</option>
            <option value={"other humantarian"}>other humantarian</option>
            <option value={"Other govt services"}>Other govt services</option>
            <option value={"Others"}>Others</option>
          </select>
          {errors.referredBy && (
            <p className="text-red-500 text-xs">Please select an option.</p>
          )}
        </div>
      </div>

      <div className="flex flex-col mt-2 w-full">
        <label className="text-xs font-semibold">
          Was there any service provided
        </label>
        <select
          {...register("anyService", { required: true })}
          className="border border-themeColor px-2 py-1 rounded-md"
        >
          <option value={""}>Select an Option</option>
          <option value={"Yes"}>Yes</option>
          <option value={"No"}>No</option>
        </select>
        {errors.anyService && (
          <p className="text-red-500 text-xs">Required***.</p>
        )}
      </div>

      {/* ===If yes, identify ALL services provided=== */}
      <h1 className="text-xs font-semibold mt-4 mb-1">
        If yes, identify ALL services provided
      </h1>
      <div className="grid grid-cols-4 gap-4 border border-themeColor p-4 rounded-md">
        {/* ===Health/ Medical services=== */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm">Health/ Medical services</label>
          <input
            {...register("medicalSupport")}
            type="checkbox"
            className="border border-themeColor text-sm px-2 py-1"
          />
          {errors.medicalSupport && (
            <p className="text-red-500 text-xs">Input should be boolean</p>
          )}
        </div>

        {/* ===Safe House/ Shelter=== */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm">Safe House/ Shelter</label>
          <input
            {...register("shelter")}
            type="checkbox"
            className="border border-themeColor text-sm px-2 py-1"
          />
          {errors.shelter && (
            <p className="text-red-500 text-xs">Input should be boolean.</p>
          )}
        </div>

        {/* ===Psychological Services=== */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm">Psychological Services</label>
          <input
            {...register("psychological")}
            type="checkbox"
            className="border border-themeColor text-sm px-2 py-1"
          />
          {errors.psychological && (
            <p className="text-red-500 text-xs">Input should be boolean.</p>
          )}
        </div>

        {/* ===Legal Assistance=== */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm">Legal Assistance</label>
          <input
            {...register("legalAssistance")}
            type="checkbox"
            className="border border-themeColor text-sm px-2 py-1"
          />
          {errors.legalAssistance && (
            <p className="text-red-500 text-xs">Input should be boolean</p>
          )}
        </div>

        {/* ===Security/ Protection=== */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm">Security/ Protection</label>
          <input
            {...register("securityProtection")}
            type="checkbox"
            className="border border-themeColor text-sm px-2 py-1"
          />
          {errors.securityProtection && (
            <p className="text-red-500 text-xs">Input should be boolean.</p>
          )}
        </div>

        {/* ===Livelihoods/ Vocational training=== */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm">Livelihoods/ Vocational training</label>
          <input
            {...register("vocTraining")}
            type="checkbox"
            className="border border-themeColor text-sm px-2 py-1"
          />
          {errors.vocTraining && (
            <p className="text-red-500 text-xs">Input should be boolean.</p>
          )}
        </div>

        {/* ===Emotional Support=== */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm">Emotional Support</label>
          <input
            {...register("emotionalSupport")}
            type="checkbox"
            className="border border-themeColor text-sm px-2 py-1"
          />
          {errors.emotionalSupport && (
            <p className="text-red-500 text-xs">Input should be boolean.</p>
          )}
        </div>

        {/* ===Information about local resources=== */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm">Information about local resources</label>
          <input
            {...register("infoLocal")}
            type="checkbox"
            className="border border-themeColor text-sm px-2 py-1"
          />
          {errors.infoLocal && (
            <p className="text-red-500 text-xs">Input should be boolean.</p>
          )}
        </div>

        {/* ===Others=== */}
        <div className="flex items-center gap-2 w-full mt-2">
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

      {/* Was survivor referred to another service */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            Was survivor referred to another service{" "}
          </label>
          <select
            {...register("redirected", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
          {errors.redirected && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* ===If yes, identify ALL other services the victim was referred to=== */}
      <h1 className="text-xs font-semibold mt-4 mb-1">
        If yes, identify ALL other services the victim was referred to
      </h1>
      <div className="grid grid-cols-4 gap-4 border border-themeColor p-4 rounded-md">
        {/* ===Health/ Medical services=== */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm">Health/ Medical services</label>
          <input
            {...register("rsMedicalSupport")}
            type="checkbox"
            className="border border-themeColor text-sm px-2 py-1"
          />
          {errors.rsMedicalSupport && (
            <p className="text-red-500 text-xs">Input should be boolean</p>
          )}
        </div>

        {/* ===Safe House/ Shelter=== */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm">Safe House/ Shelter</label>
          <input
            {...register("rsShelter")}
            type="checkbox"
            className="border border-themeColor text-sm px-2 py-1"
          />
          {errors.rsShelter && (
            <p className="text-red-500 text-xs">Input should be boolean.</p>
          )}
        </div>

        {/* ===Psychological Services=== */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm">Psychological Services</label>
          <input
            {...register("rsPsychological")}
            type="checkbox"
            className="border border-themeColor text-sm px-2 py-1"
          />
          {errors.rsPsychological && (
            <p className="text-red-500 text-xs">Input should be boolean.</p>
          )}
        </div>

        {/* ===Legal Assistance=== */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm">Legal Assistance</label>
          <input
            {...register("rsLegalAssistance")}
            type="checkbox"
            className="border border-themeColor text-sm px-2 py-1"
          />
          {errors.rsLegalAssistance && (
            <p className="text-red-500 text-xs">Input should be boolean</p>
          )}
        </div>

        {/* ===Security/ Protection=== */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm">Security/ Protection</label>
          <input
            {...register("rsSecurityProtection")}
            type="checkbox"
            className="border border-themeColor text-sm px-2 py-1"
          />
          {errors.rsSecurityProtection && (
            <p className="text-red-500 text-xs">Input should be boolean.</p>
          )}
        </div>

        {/* ===Livelihoods/ Vocational training=== */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm">Livelihoods/ Vocational training</label>
          <input
            {...register("rsVocTraining")}
            type="checkbox"
            className="border border-themeColor text-sm px-2 py-1"
          />
          {errors.rsVocTraining && (
            <p className="text-red-500 text-xs">Input should be boolean.</p>
          )}
        </div>

        {/* ===Emotional Support=== */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm">Emotional Support</label>
          <input
            {...register("rsEmotionalSupport")}
            type="checkbox"
            className="border border-themeColor text-sm px-2 py-1"
          />
          {errors.rsEmotionalSupport && (
            <p className="text-red-500 text-xs">Input should be boolean.</p>
          )}
        </div>

        {/* ===Information about local resources=== */}
        <div className="flex items-center gap-2 w-full">
          <label className="text-sm">Information about local resources</label>
          <input
            {...register("rsInfoLocal")}
            type="checkbox"
            className="border border-themeColor text-sm px-2 py-1"
          />
          {errors.rsInfoLocal && (
            <p className="text-red-500 text-xs">Input should be boolean.</p>
          )}
        </div>

        {/* ===Others=== */}
        <div className="flex items-center gap-2 w-full mt-2">
          <input
            {...register("rsOtherSupport")}
            placeholder="Others (please specify)"
            className="border border-themeColor text-xs px-2 py-1"
          />
          {errors.rsOtherSupport && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* Has this victim dropped out of your system? */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            Has this victim dropped out of your system?{" "}
          </label>
          <select
            {...register("droppedOutVictim", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
          {errors.droppedOutVictim && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* Has Victim reported to police?/ Has your organisation supported a protection order for this report? */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            Has Victim reported to police?{" "}
          </label>
          <select
            {...register("policeReport", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
          {errors.policeReport && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            Has your organisation supported a protection order for this report?{" "}
          </label>
          <select
            {...register("protectionOrder", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
          {errors.protectionOrder && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* Did the victim attempt to committ suicide/ When did the victim attempt to committ suicide   */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            Did the victim attempt to committ suicide?{" "}
          </label>
          <select
            {...register("suicideAttempt", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
          {errors.suicideAttempt && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>

        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            When did the victim attempt to committ suicide?{" "}
          </label>
          <select
            {...register("suicideTime")}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"January"}>January</option>
            <option value={"Febuary"}>Febuary</option>
            <option value={"March"}>March</option>
            <option value={"April"}>April</option>
            <option value={"May"}>May</option>
            <option value={"June"}>June</option>
            <option value={"July"}>July</option>
            <option value={"August"}>August</option>
            <option value={"September"}>September</option>
            <option value={"October"}>October</option>
            <option value={"November"}>November</option>
            <option value={"December"}>December</option>
          </select>
          {errors.suicideTime && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* What was the method used/ Number of attempts */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            What was the method used{" "}
          </label>
          <textarea
            {...register("suicideMethod")}
            className="border border-themeColor px-2 py-1 rounded-md"
          ></textarea>
          {errors.suicideMethod && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>

        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Number of attempts </label>
          <input
            {...register("noOfAttempts")}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.noOfAttempts && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* Was the victim satisfied with the service received?/ Reason NOT satisfied, or any other comments you would like to make about this incident */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            Was the victim satisfied with the service received?{" "}
          </label>
          <select
            {...register("satisfiedService", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
          {errors.satisfiedService && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>
      <div className="flex flex-col mt-2 w-full">
        <label className="text-xs font-semibold">
          Reason NOT satisfied, or any other comments you would like to make
          about this incident{" "}
        </label>
        <textarea
          {...register("reasonNotSatisfied")}
          className="border border-themeColor px-2 py-1 rounded-md"
        ></textarea>
        {errors.reasonNotSatisfied && (
          <p className="text-red-500 text-xs">Required***.</p>
        )}
      </div>

      {/* Button */}
      <div className="mt-4 flex justify-center items-center">
        <button
          onClick={() => setValue("caseId", id)}
          className="bg-themeColor hover:bg-darkTheme hover:font-bold px-12 py-2 text-white text-sm rounded-md flex justify-center items-center gap-2"
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default GbvInfoForm;
