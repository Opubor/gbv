"use client";
import { perpetratorDetailsSchema } from "@/schema/perpetratorDetails";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type PageProps = {
  id: string | undefined;
};

function PerpetratorDetailsForm({ id }: PageProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(perpetratorDetailsSchema) });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch("/api/perpetratorDetails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          caseId: data?.caseId,
          noOfPerpetrators: data?.noOfPerpetrators,
          contactWithPerpetrator: data?.contactWithPerpetrator,
          residentialVillage: data?.residentialVillage,
          secondVillage: data?.secondVillage,
          dob: data?.dob,
          age: data?.age,
          sex: data?.sex,
          nationality: data?.nationality,
          maritalStatus: data?.maritalStatus,
          mainActivity: data?.mainActivity,
          religion: data?.religion,
          disabled: data?.disabled,
          typeOfDisability: data?.typeOfDisability,
          protectionOrder: data?.protectionOrder,
          fullName: data?.fullName,
          aka: data?.aka,
        }),
      });
      setLoading(false);

      if (response.status === 200) {
        toast.success("Perpetrator details added Successful", {
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
      {/* Ful Name/ Also Known As(AKA) */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Full Name</label>
          <input
            {...register("fullName", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.fullName && (
            <p className="text-red-500 text-xs">Required***</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Also known as (AKA)</label>
          <input
            {...register("aka", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.aka && <p className="text-red-500 text-xs">Required***</p>}
        </div>
      </div>

      {/* No of Perpetrators/ contactWithPerpetrator */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">No of Perpetrators</label>
          <select
            {...register("noOfPerpetrators", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"One"}>One</option>
            <option value={"More than One"}>More than One</option>
          </select>
          {errors.noOfPerpetrators && (
            <p className="text-red-500 text-xs">Please select an option.</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            Did service provider had any contact with primary perpetrator?
          </label>
          <select
            {...register("contactWithPerpetrator", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
          {errors.contactWithPerpetrator && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* Residential village of primary perpetrator/ Second village of primary perpetrator */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            Residential Village of Primary Perpetrator
          </label>
          <select
            {...register("residentialVillage", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Apia Urban Area"}>Apia Urban Area</option>
            <option value={"NW Upolu "}>NW Upolu </option>
            <option value={"RO Upolu"}>RO Upolu</option>
            <option value={"Savaii"}>Savaii</option>
            <option value={"Same as survivor"}>Same as survivor</option>
            <option value={"Other village/area "}>Other village/area </option>
          </select>
          {errors.residentialVillage && (
            <p className="text-red-500 text-xs">Please select an option.</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            Second village of primary perpetrator{" "}
          </label>
          <select
            {...register("secondVillage", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Apia Urban Area"}>Apia Urban Area</option>
            <option value={"NW Upolu "}>NW Upolu </option>
            <option value={"RO Upolu"}>RO Upolu</option>
            <option value={"Savaii"}>Savaii</option>
            <option value={"Same as survivor"}>Same as survivor</option>
            <option value={"Other village/area "}>Other village/area </option>
          </select>
          {errors.secondVillage && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* Date of Birth/ Age */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Date of Birth</label>
          <input
            {...register("dob", { required: true })}
            type="date"
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.dob && <p className="text-red-500 text-xs">Required***.</p>}
        </div>

        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Age </label>
          <select
            {...register("age", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Under 18"}>Under 18</option>
            <option value={"18-24"}>18-24</option>
            <option value={"25-39"}>25-39</option>
            <option value={"40-49"}>40-49</option>
            <option value={"50-59"}>50-59</option>
            <option value={"60+"}>60+</option>
          </select>
          {errors.age && <p className="text-red-500 text-xs">Required***.</p>}
        </div>
      </div>

      {/* Sex/ Nationality */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Sex</label>
          <select
            {...register("sex", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
            <option value={"Trans"}>Trans</option>
            <option value={"Others"}>Others</option>
            <option value={"Not disclosd"}>Not disclosd</option>
          </select>
          {errors.sex && <p className="text-red-500 text-xs">Required***.</p>}
        </div>

        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Nationality</label>

          <select
            {...register("nationality", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Samoan"}>Samoan</option>
            <option value={"Other Pacific Island"}>Other Pacific Island</option>
            <option value={"New Zealand/Australian"}>
              New Zealand/Australian
            </option>
            <option value={"Asian"}>Asian</option>
            <option value={"Others"}>Others</option>
          </select>
          {errors.nationality && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* Marital Status/ Main Activity */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Marital Status</label>
          <select
            {...register("maritalStatus", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Single"}>Single</option>
            <option value={"Married"}>Married</option>
            <option value={"Defacto Union"}>Defacto Union</option>
            <option value={"Widowed"}>Widowed</option>
            <option value={"Divorced"}>Divorced</option>
            <option value={"Separated"}>Separated</option>
            <option value={"Others"}>Others</option>
          </select>
          {errors.maritalStatus && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Main Activity</label>

          <select
            {...register("mainActivity", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Employee"}>Employee</option>
            <option value={"Employer"}>Employer</option>
            <option value={"Self Employed"}>Self Employed</option>
            <option value={"Contributing family member"}>
              Contributing family member
            </option>
            <option value={"Unpaid voluntary worker"}>
              Unpaid voluntary worker
            </option>
            <option value={"Agricultural Activity"}>
              Agricultural Activity
            </option>
            <option value={"Looking for work"}>Looking for work</option>
            <option value={"Studying or Training"}>Studying or Training</option>
            <option value={"Domestic duties"}>Domestic duties</option>
            <option
              value={"Incapable due to elderly, long illness, disability"}
            >
              Incapable due to elderly, long illness, disability
            </option>
            <option value={"Others"}>Others</option>
          </select>
          {errors.mainActivity && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* Religion/ Disabled? */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Religion</label>
          <select
            {...register("religion", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"CCCS/EFKS"}>CCCS/EFKS</option>
            <option value={"Methodist"}>Methodist</option>
            <option value={"Latter Day Saints"}>Latter Day Saints</option>
            <option value={"Roman Catholic"}>Roman Catholic</option>
            <option value={"SDA (Asofitu)"}>SDA (Asofitu)</option>
            <option value={"Assembly of God"}>Assembly of God</option>
            <option value={"Baptist Church"}>Baptist Church</option>
            <option value={"Ekalesia Nasareta"}>Ekalesia Nasareta</option>
            <option value={"Voice of Christ"}>Voice of Christ</option>
            <option value={"Worship Centre"}>Worship Centre</option>
            <option value={"Peace Chapel"}>Peace Chapel</option>
            <option value={"CCJS"}>CCJS</option>
            <option value={"Anglican"}>Anglican</option>
            <option value={"Protestant"}>Protestant</option>
            <option value={"Islam"}>Islam</option>
            <option value={"Bahai"}>Bahai</option>
            <option value={"No Religion"}>No Religion</option>
            <option value={"Others"}>Others</option>
          </select>
          {errors.religion && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>

        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Disabled?</label>
          <select
            {...register("disabled", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
          {errors.disabled && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* Type of disability/ Is there a protection order in place for this perpetrator?   */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Type of Disability</label>
          <select
            {...register("typeOfDisability", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Seeing"}>Seeing</option>
            <option value={"Hearing"}>Hearing</option>
            <option value={"Mobility"}>Mobility</option>
            <option value={"Memory"}>Memory</option>
            <option value={"Self Care"}>Self Care</option>
            <option value={"Communication"}>Communication</option>
            <option value={"None"}>None</option>
            <option value={"Others"}>Others</option>
          </select>
          {errors.typeOfDisability && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>

        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            Is there a protection order in place for this perpetrator?{" "}
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
            <p className="text-red-500 text-xs">Please select an option.</p>
          )}
        </div>
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

export default PerpetratorDetailsForm;
