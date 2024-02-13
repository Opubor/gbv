"use client";
import { caseSchema } from "@/schema/case";
import {
  editVictimDetailsSchema,
  victimDetailsSchema,
} from "@/schema/victimDetails";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {
  serviceProvider: any;
  agencies: any;
};

function EditForm({ serviceProvider, agencies }: Props) {
  const router = useRouter();
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(caseSchema),
    defaultValues: serviceProvider || {},
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/case/${serviceProvider?.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          registeredBy: data?.registeredBy,
          registrationDate: data?.registrationDate,
          registrationTime: data?.registrationTime,
          incidentDate: data?.incidentDate,
          region: data?.region,
          serviceProviderId: data?.serviceProviderId,
          serviceProviderReferralId: data?.serviceProviderReferralId,
          tbid: data?.tbid,
          userId: data?.userId,
        }),
      });
      setLoading(false);

      if (response.status === 200) {
        toast.success("Service provider details edited Successful", {
          position: "top-right",
        });
        router.push("/admin/cases");
        return router?.refresh();
      } else if (response?.status === 404) {
        return toast.error("Error during update", {
          position: "top-right",
        });
      }
    } catch (error) {
      return toast.error("Error in update", {
        position: "top-right",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* ===inputs=== */}
      {/* ===Service Provider/ Registration Date=== */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Service Provider</label>
          <select
            {...register("serviceProviderId", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={serviceProvider?.serviceProvider?.id}>
              {serviceProvider?.serviceProvider?.name}
            </option>
            {agencies?.map((data: any) => (
              <option key={data?.id} value={data?.id}>
                {data?.name}
              </option>
            ))}
          </select>
          {errors.serviceProviderId && (
            <p className="text-red-500 text-xs">Required***</p>
          )}
        </div>

        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Registration Date</label>
          <input
            {...register("registrationDate", { required: true })}
            type="date"
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.registrationDate && (
            <p className="text-red-500 text-xs">
              Registration date is required.
            </p>
          )}
        </div>
      </div>

      {/* ===Referred By/ Registration Date=== */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Referred by</label>
          <select
            {...register("registeredBy", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Self Referral"}>Self Referral</option>
            <option value={"Another Service Provider"}>
              Another Service Provider
            </option>
            <option value={"Police"}>Police</option>
            <option value={"SVSG"}>SVSG</option>
            <option value={"FLO"}>FLO</option>
            <option value={"MWCSD"}>MWCSD</option>
            <option value={"SFHA"}>SFHA</option>
            <option value={"Health worker/facility"}>
              Health worker/facility
            </option>
            <option value={"Family of Perpetrator"}>
              Family of Perpetrator
            </option>
            <option value={"Pastor/Church leader"}>Pastor/Church leader</option>
            <option value={"Teacher/School leader"}>
              Teacher/School leader
            </option>
            <option value={"Employer/Work supervisor/Colleague"}>
              Employer/Work supervisor/Colleague
            </option>
            <option value={"Court order"}>Court order</option>
            <option value={"Friend"}>Friend</option>
            <option value={"Family of Survivor"}>Family of Survivor</option>
            <option
              value={"Bystander/Neighbour/Community/Menber(not a friend)"}
            >
              Bystander/Neighbour/Community/Menber(not a friend)
            </option>
            <option value={"Other Service"}>Other Service</option>
          </select>
          {errors.registeredBy && (
            <p className="text-red-500 text-xs">Required.</p>
          )}
        </div>

        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            Was the victim referred by another service provider? (If yes please
            select service provider)
          </label>
          <select
            {...register("serviceProviderReferralId", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={serviceProvider?.serviceProviderReferral?.id}>
              {serviceProvider?.serviceProviderReferral?.name}
            </option>
            {agencies?.map((data: any) => (
              <option key={data?.id} value={data?.id}>
                {data?.name}
              </option>
            ))}
          </select>

          {errors.serviceProviderReferralId && (
            <p className="text-red-500 text-xs">
              Registration date is required.
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Registration Time</label>
          <input
            {...register("registrationTime", { required: true })}
            type="time"
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.registrationTime && (
            <p className="text-red-500 text-xs">
              Registration time is required.
            </p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Incident Date</label>
          <input
            {...register("incidentDate", { required: true })}
            type="date"
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.incidentDate && (
            <p className="text-red-500 text-xs">Incident date is required.</p>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            Region (For statistic purpose)
          </label>
          <select
            {...register("region", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={"Select a region"}>Select a region</option>
            <option value={"Urban"}>Urban</option>
            <option value={"Rural"}>Rural</option>
          </select>
          {errors.region && (
            <p className="text-red-500 text-xs">Please select a region.</p>
          )}
        </div>
      </div>

      {/* ===Time between incident and disclosure		=== */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            Time between incident and disclosure{" "}
          </label>
          <select
            {...register("tbid", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select time frame</option>
            <option value={"0 - 3 days"}>0 - 3 days</option>
            <option value={"4 - 5 days"}>4 - 5 days</option>
            <option value={"6 - 14 days"}>6 - 14 days</option>
            <option value={"2 weeks - 1 month"}>2 weeks - 1 month</option>
            <option value={"more than a month"}>more than a month</option>
            <option value={"Not Specified"}>Not Specified</option>
          </select>
          {errors.tbid && <p className="text-red-500 text-xs">Required***.</p>}
        </div>
      </div>

      <div className="mt-4 flex justify-center items-center">
        <button
          onClick={() => setValue("userId", session?.user?.id)}
          className="bg-themeColor hover:bg-darkTheme hover:font-bold px-12 py-2 text-white text-sm rounded-md flex justify-center items-center gap-2"
        >
          {loading ? "Loading..." : "Edit"}
        </button>
      </div>
    </form>
  );
}

export default EditForm;
