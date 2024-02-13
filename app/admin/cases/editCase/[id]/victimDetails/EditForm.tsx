"use client";
import {
  editVictimDetailsSchema,
  victimDetailsSchema,
} from "@/schema/victimDetails";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Props = {
  victimDetails: any;
};

function EditForm({ victimDetails }: Props) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(editVictimDetailsSchema),
    defaultValues: victimDetails || {},
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/victimDetails/${victimDetails?.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          caseId: data?.caseId,
          newClient: data?.newClient,
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
          incidentVillage: data?.incidentVillage,
          incidentLocation: data?.incidentLocation,
          incidentTime: data?.incidentTime,
          violenceType: data?.violenceType,
          causeOfViolence: data?.causeOfViolence,
          perpetratorSex: data?.perpetratorSex,
          perpetratorSurvivorRelationship:
            data?.perpetratorSurvivorRelationship,
          immediateProtection: data?.immediateProtection,
          firstName: data?.firstName,
          lastName: data?.lastName,
          attendingSchool: data?.attendingSchool,
          nameOfSchool: data?.nameOfSchool,
          gradeInSchool: data?.gradeInSchool,
          typeOfCase: data?.typeOfCase,
          homeVisitDates: data?.homeVisitDates,
          nameOfFather: data?.nameOfFather,
          nameOfMother: data?.nameOfMother,
          statusCase: data?.statusCase,
          contactNumber: data?.contactNumber,
        }),
      });
      setLoading(false);

      if (response.status === 200) {
        toast.success("Victim details edited Successful", {
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
      {/* First Name/ Last Name */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">First Name</label>
          <input
            {...register("firstName", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs">Required***</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Last Name</label>
          <input
            {...register("lastName", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* New Client/ Residential Village */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">New Client?</label>
          <select
            {...register("newClient", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"New"}>New</option>
            <option value={"Repeat"}>Repeat</option>
          </select>
          {errors.newClient && (
            <p className="text-red-500 text-xs">Please select an option.</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Status of Case</label>
          <select
            {...register("statusCase", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Active"}>Active</option>
            <option value={"Closed"}>Closed</option>
          </select>
          {errors.statusCase && (
            <p className="text-red-500 text-xs">Please select an option.</p>
          )}
        </div>
      </div>

      {/* Residential Village/Second Village */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Residential Village</label>
          <input
            {...register("residentialVillage", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.residentialVillage && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Second Village</label>
          <input
            {...register("secondVillage", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.secondVillage && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* Contact Number/Date of Birth */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Contact Number</label>
          <input
            {...register("contactNumber", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.contactNumber && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>

        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Date of Birth</label>
          <input
            {...register("dob", { required: true })}
            type="date"
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.dob && <p className="text-red-500 text-xs">Required***.</p>}
        </div>
      </div>

      {/* Age Group/ Sex */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Age</label>

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
            <option value={"Not disclosed"}>Not disclosed</option>
          </select>
          {errors.sex && <p className="text-red-500 text-xs">Required***.</p>}
        </div>
      </div>

      {/* Nationality/ Marital Status */}
      <div className="flex justify-between items-center gap-4">
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
      </div>

      {/* Main Activity/ Religion */}
      <div className="flex justify-between items-center gap-4">
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
      </div>

      {/* Disabled?/Type of Disability */}
      <div className="flex justify-between items-center gap-4">
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
      </div>

      {/* Incident Village/ Incident Location */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Incident Village</label>
          <input
            {...register("incidentVillage", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.incidentVillage && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Incident Location</label>

          <select
            {...register("incidentLocation", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Victims Home"}>Victims Home</option>
            <option value={"Perpetrators Home"}>Perpetrators Home</option>
            <option value={"Workplace"}>Workplace</option>
            <option value={"Beach"}>Beach</option>
            <option value={"Public toilets"}>Public toilets</option>
            <option value={"School"}>School</option>
            <option value={"Church"}>Church</option>
            <option value={"Garden/Bush"}>Garden/Bush</option>
            <option value={"Night club"}>Night club</option>
            <option value={"Marketplace"}>Marketplace</option>
            <option value={"Dont Know"}>Dont Know</option>
            <option value={"Others"}>Others</option>
          </select>
          {errors.incidentLocation && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* Incident Time/ Violence Type */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Incident Time</label>

          <select
            {...register("incidentTime", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Morning"}>Morning</option>
            <option value={"Afternoon"}>Afternoon</option>
            <option value={"Evening/Night"}>Evening/Night</option>
            <option value={"Not Stated"}>Not Stated</option>
            <option value={"Not Applicable"}>Not Applicable</option>
          </select>
          {errors.incidentTime && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Violence Type</label>
          <select
            {...register("violenceType", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Physical"}>Physical</option>
            <option value={"Sexual"}>Sexual</option>
            <option value={"Emotional/psychological"}>
              Emotional/psychological
            </option>
            <option value={"Economic"}>Economic</option>
            <option value={"Exploitation"}>Exploitation</option>
            <option value={"Rape"}>Rape</option>
            <option value={"Forced marriage"}>Forced marriage</option>
            <option value={"Others"}>Others</option>
          </select>
          {errors.violenceType && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* Cause of Violence/ Perpertrator Sex */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Cause of Violence</label>

          <select
            {...register("causeOfViolence", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Alcohol/Drugs"}>Alcohol/Drugs</option>
            <option value={"Financial"}>Financial</option>
            <option value={"Anger management"}>Anger management</option>
            <option value={"Marital problems"}>Marital problems</option>
            <option value={"Mental Health Issues"}>Mental Health Issues</option>
            <option value={"Others"}>Others</option>
          </select>
          {errors.causeOfViolence && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Perpertrator Sex</label>
          <select
            {...register("perpetratorSex", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
            <option value={"Trans"}>Trans</option>
            <option value={"Others"}>Others</option>
          </select>
          {errors.perpetratorSex && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* Survivor/Perpertrator Relationship//Protection Status */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            Survivor/Perpertrator Relationship
          </label>
          <select
            {...register("perpetratorSurvivorRelationship", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"CURRENT male partner (husband/boyfriend/defacto)"}>
              CURRENT male partner (husband/boyfriend/defacto)
            </option>
            <option value={"PAST male partner (husband/boyfriend/defacto)"}>
              PAST male partner (husband/boyfriend/defacto)
            </option>
            <option value={"CURRENT female partner (wife/girlfriend/defacto)"}>
              CURRENT female partner (wife/girlfriend/defacto)
            </option>
            <option value={"PAST female partner (wife/girlfriend/defacto)"}>
              PAST female partner (wife/girlfriend/defacto)
            </option>
            <option value={"Mother/ step-mother/ adoptive mother"}>
              Mother/ step-mother/ adoptive mother
            </option>
            <option value={"Father/ step-father/ adoptive fatheer"}>
              Father/ step-father/ adoptive fatheer
            </option>
            <option value={"Father-in-law"}>Father-in-law</option>
            <option value={"Mother-in-law"}>Mother-in-law</option>
            <option value={"Aunt"}>Aunt</option>
            <option value={"Uncle"}>Uncle</option>
            <option value={"Brother"}>Brother</option>
            <option value={"Sister"}>Sister</option>
            <option value={"Grandmother"}>Grandmother</option>
            <option value={"Grandfather"}>Grandfather</option>
            <option value={"Other relative male"}>Other relative male</option>
            <option value={"Other relative female"}>
              Other relative female
            </option>
            <option value={"Community leader"}>Community leader</option>
            <option value={"Faith leader"}>Faith leader</option>
            <option value={"Work colleague"}>Work colleague</option>
            <option value={"Supervisor/ Employer"}>Supervisor/ Employer</option>
            <option value={"Teacher/ School official"}>
              Teacher/ School official
            </option>
            <option value={"School friend"}>School friend</option>
            <option value={"Service Provider/ shop keeper"}>
              Service Provider/ shop keeper
            </option>
            <option value={"Family friend/ Neighbour"}>
              Family friend/ Neighbour
            </option>
            <option value={"Other community member"}>
              Other community member
            </option>
            <option value={"Stranger"}>Stranger</option>
            <option value={"No relation"}>No relation</option>
            <option value={"Others"}>Others</option>
          </select>
          {errors.perpetratorSurvivorRelationship && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Immediate protection</label>
          <select
            {...register("immediateProtection", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
          {errors.immediateProtection && (
            <p className="text-red-500 text-xs">Required***.</p>
          )}
        </div>
      </div>

      {/* Name of Father/ Name of Mother */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Name of Father</label>
          <input
            {...register("nameOfFather")}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.nameOfFather && (
            <p className="text-red-500 text-xs">Must be a string</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Name of Mother</label>
          <input
            {...register("nameOfMother")}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.nameOfMother && (
            <p className="text-red-500 text-xs">Must be a string</p>
          )}
        </div>
      </div>

      {/* Are they attending School? / Name of school*/}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">
            Are they attending school?
          </label>
          <select
            {...register("attendingSchool", { required: true })}
            className="border border-themeColor px-2 py-1 rounded-md"
          >
            <option value={""}>Select an Option</option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
          {errors.attendingSchool && (
            <p className="text-red-500 text-xs">Required***</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Name of School</label>
          <input
            {...register("nameOfSchool")}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.nameOfSchool && (
            <p className="text-red-500 text-xs">Must be a string</p>
          )}
        </div>
      </div>

      {/* Grade in school/ Type of case */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Grade in School</label>
          <input
            {...register("gradeInSchool")}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.gradeInSchool && (
            <p className="text-red-500 text-xs">Must be a string</p>
          )}
        </div>
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Type of case</label>
          <input
            {...register("typeOfCase")}
            className="border border-themeColor px-2 py-1 rounded-md"
          />
          {errors.typeOfCase && (
            <p className="text-red-500 text-xs">Must be a string</p>
          )}
        </div>
      </div>

      {/* Home visit Dates */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col mt-2 w-full">
          <label className="text-xs font-semibold">Home visit dates</label>
          <textarea
            {...register("homeVisitDates")}
            className="border border-themeColor px-2 py-1 rounded-md"
          ></textarea>
          {errors.homeVisitDates && (
            <p className="text-red-500 text-xs">Must be a string</p>
          )}
        </div>
      </div>

      {/* Button */}
      <div className="mt-4 flex justify-center items-center">
        <button
          //   onClick={() => setValue("caseId", id)}
          className="bg-themeColor hover:bg-darkTheme hover:font-bold px-12 py-2 text-white text-sm rounded-md flex justify-center items-center gap-2"
        >
          {loading ? "Loading..." : "Edit"}
        </button>
      </div>
    </form>
  );
}

export default EditForm;
