"use client";
import React, { useRef } from "react";
import { getCase } from "@/services/case";
import { FaBook } from "react-icons/fa";
import { BsPerson, BsPersonArmsUp } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { BiBookHeart } from "react-icons/bi";
import ReactToPrint from "react-to-print";
import { MdOutlinePrint } from "react-icons/md";

type Props = {
  caseFile: any;
};
function CaseFile({ caseFile }: Props) {
  const componentRef = useRef<any>();

  return (
    <div className="bg-white rounded-lg p-4 w-full" ref={componentRef}>
      {/* ===Header=== */}
      <div className="bg-purple-50 p-2 rounded-t-md flex justify-between items-center">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <FaBook /> CASE ID - {caseFile?.caseId}
        </h1>
        <ReactToPrint
          trigger={() => {
            return (
              <div className="flex justify-end px-8">
                <button className="bg-lime-600 px-8 py-1.5 rounded-md text-sm text-white flex items-center justify-center gap-1">
                  <MdOutlinePrint /> Print Case File
                </button>
              </div>
            );
          }}
          documentTitle={`Case File - ${caseFile?.caseId}`}
          pageStyle={"Print"}
          content={() => componentRef.current!}
        />
      </div>

      {/* ===Service Provider=== */}
      <div className="mt-6 px-2 py-3 shadow-md shadow-gray-200 rounded-md">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="col-span-1 border-4 border-double border-purple-500 rounded-md flex flex-col justify-center items-center">
            <BiBookHeart className="text-7xl text-themeColor" />
            <h1 className="font-bold text-md lg:text-lg xl:text-2xl font-serif">
              Service Provider
            </h1>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">Registered by</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.registeredBy}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Registration Date</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.registrationDate}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Registration Time</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.registrationTime}
              </h1>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">Incident Date</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.incidentDate}
              </h1>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>

      {/* ===Victim Details=== */}
      <div className="mt-3 py-3 px-2 bg-purple-50 shadow-md shadow-gray-200 rounded-md">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Victim Details---Row 1 */}
          <div className="col-span-1 border-4 border-double border-purple-500 rounded-md flex flex-col justify-center items-center">
            <BsPerson className="text-7xl text-themeColor" />
            <h1 className="font-bold text-md lg:text-lg xl:text-2xl font-serif">
              Victim Details
            </h1>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">New Client?</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.newClient}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Residential Village</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.residentialVillage}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Second Village</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.secondVillage}
              </h1>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">First Name</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.firstName}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Last Name</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.lastName}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Contact Number</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.contactNumber}
              </h1>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">Date of Birth</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.dob}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Age</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.age}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Sex</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.sex}
              </h1>
            </div>
          </div>
        </div>
        {/* Victim detail---Row-2 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-6">
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">Religion</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.religion}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Disabled?</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.disabled}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Type of Disability</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.typeOfDisability
                  ? caseFile?.Victim?.at(0)?.typeOfDisability
                  : "---"}
              </h1>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">Incident Village</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.incidentVillage}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Incident Location</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.incidentLocation}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Incident Time</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.incidentTime}
              </h1>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">Violence Type</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.violenceType}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Cause of Violence</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.causeOfViolence}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Perpetrator Sex</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.perpetratorSex}
              </h1>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">
                Survivor/Perpetrator relationship
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.perpetratorSurvivorRelationship}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Immediate Proection?</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.immediateProtection}
              </h1>
            </div>
          </div>
        </div>

        {/* Victim detail---Row-3 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-6 ">
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">Nationality</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.nationality}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Marital Status</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.maritalStatus}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Main Activity</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.mainActivity}
              </h1>
            </div>
          </div>

          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">Status of Case</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.statusCase}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Type of Case</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.typeOfCase}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Home visit Dates</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.homeVisitDates}
              </h1>
            </div>
          </div>

          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">Are they in School?</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.attendingSchool}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Name of School</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.nameOfSchool}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Grade in School</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.gradeInSchool}
              </h1>
            </div>
          </div>

          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">Name of Father</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.nameOfFather}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Name of Mother</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Victim?.at(0)?.nameOfMother}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* ===Perpetrator Details=== */}
      <div className="mt-3 py-3 px-2 shadow-md shadow-gray-200 rounded-md">
        {/* Perpetrator Details---Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="col-span-1 border-4 border-double border-purple-500 rounded-md flex flex-col justify-center items-center">
            <BsPerson className="text-7xl text-themeColor" />
            <h1 className="font-bold text-md lg:text-lg xl:text-2xl font-serif">
              Perpetrator Details
            </h1>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">No of Perpetrators</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Perpetrator?.at(0)?.noOfPerpetrators}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">
                Did service provider had any contact with primary perpetrator?
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Perpetrator?.at(0)?.contactWithPerpetrator}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">
                Residential Village of Primary Perpetrator
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Perpetrator?.at(0)?.residentialVillage}
              </h1>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">Full Name</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Perpetrator?.at(0)?.fullName}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Also Known as (AKA)</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Perpetrator?.at(0)?.aka}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Age</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Perpetrator?.at(0)?.age}
              </h1>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">Sex</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Perpetrator?.at(0)?.sex}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Nationality</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Perpetrator?.at(0)?.nationality}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Marital Status</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Perpetrator?.at(0)?.maritalStatus}
              </h1>
            </div>
          </div>
        </div>
        {/* Perpetrator details---Row-2 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-6">
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">Main Activity</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Perpetrator?.at(0)?.mainActivity}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Religion</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Perpetrator?.at(0)?.religion}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Disabled?</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Perpetrator?.at(0)?.disabled}
              </h1>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">Type of Disability</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Perpetrator?.at(0)?.typeOfDisability
                  ? caseFile?.Perpetrator?.at(0)?.typeOfDisability
                  : "---"}{" "}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">
                Is there a protection order in place for this perpetrator?
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Perpetrator?.at(0)?.protectionOrder}
              </h1>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">
                Second village of primary perpetrator
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Perpetrator?.at(0)?.secondVillage}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Date of Birth</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.Perpetrator?.at(0)?.dob}
              </h1>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>

      {/* ===GBV Information=== */}
      <div className="mt-3 py-3 px-2 bg-purple-50 shadow-md shadow-gray-200 rounded-md">
        {/* GBV Information---Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="col-span-1 border-4 border-double border-purple-500 rounded-md flex flex-col justify-center items-center">
            <HiInformationCircle className="text-7xl text-themeColor" />
            <h1 className="font-bold text-md lg:text-lg xl:text-2xl font-serif">
              GBV Information
            </h1>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">
                Who referred the victim to this service?
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.GbvInformation?.at(0)?.referredBy}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">
                Was there any service provided
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.GbvInformation?.at(0)?.anyService}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">
                If yes, identify ALL services provided
              </h1>
              <div>
                {caseFile?.GbvInformation?.at(0)?.emotionalSupport === true && (
                  <h1 className="text-md font-semibold">- Emotional Support</h1>
                )}
                {caseFile?.GbvInformation?.at(0)?.medicalSupport === true && (
                  <h1 className="text-md font-semibold">- Medical Support</h1>
                )}
                {caseFile?.GbvInformation?.at(0)?.legalAssistance === true && (
                  <h1 className="text-md font-semibold">- Legal Assistance</h1>
                )}
                {caseFile?.GbvInformation?.at(0)?.infoLocal === true && (
                  <h1 className="text-md font-semibold">
                    - Information about local resources
                  </h1>
                )}
                {caseFile?.GbvInformation?.at(0)?.shelter === true && (
                  <h1 className="text-md font-semibold">
                    - Safe House/ Shelter
                  </h1>
                )}
                {caseFile?.GbvInformation?.at(0)?.psychological === true && (
                  <h1 className="text-md font-semibold">
                    - Psychological Services
                  </h1>
                )}
                {caseFile?.GbvInformation?.at(0)?.securityProtection ===
                  true && (
                  <h1 className="text-md font-semibold">
                    - Security/ Protection
                  </h1>
                )}
                {caseFile?.GbvInformation?.at(0)?.vocTraining === true && (
                  <h1 className="text-md font-semibold">
                    - Livelihoods/ Vocational training
                  </h1>
                )}
                {caseFile?.GbvInformation?.at(0)?.otherSupport && (
                  <h1 className="text-md font-semibold">
                    {caseFile?.GbvInformation?.at(0)?.otherSupport}
                  </h1>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">
                Was survivor referred to another service
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.GbvInformation?.at(0)?.redirected}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">
                If yes, identify ALL other services the victim was referred to
              </h1>
              <div>
                <div>
                  {caseFile?.GbvInformation?.at(0)?.rsEmotionalSupport ===
                    true && (
                    <h1 className="text-md font-semibold">
                      - Emotional Support
                    </h1>
                  )}
                  {caseFile?.GbvInformation?.at(0)?.medicalSupport === true && (
                    <h1 className="text-md font-semibold">- Medical Support</h1>
                  )}
                  {caseFile?.GbvInformation?.at(0)?.rsLegalAssistance ===
                    true && (
                    <h1 className="text-md font-semibold">
                      - Legal Assistance
                    </h1>
                  )}
                  {caseFile?.GbvInformation?.at(0)?.rsInfoLocal === true && (
                    <h1 className="text-md font-semibold">
                      - Information about local resources
                    </h1>
                  )}
                  {caseFile?.GbvInformation?.at(0)?.rsShelter === true && (
                    <h1 className="text-md font-semibold">
                      - Safe House/ Shelter
                    </h1>
                  )}
                  {caseFile?.GbvInformation?.at(0)?.rsPsychological ===
                    true && (
                    <h1 className="text-md font-semibold">
                      - Psychological Services
                    </h1>
                  )}
                  {caseFile?.GbvInformation?.at(0)?.rsSecurityProtection ===
                    true && (
                    <h1 className="text-md font-semibold">
                      - Security/ Protection
                    </h1>
                  )}
                  {caseFile?.GbvInformation?.at(0)?.rsVocTraining === true && (
                    <h1 className="text-md font-semibold">
                      - Livelihoods/ Vocational training
                    </h1>
                  )}
                  {caseFile?.GbvInformation?.at(0)?.otherSupport && (
                    <h1 className="text-md font-semibold">
                      {caseFile?.GbvInformation?.at(0)?.otherSupport}
                    </h1>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">
                Has this victim dropped out of your system?
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.GbvInformation?.at(0)?.droppedOutVictim}
              </h1>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">
                Has Victim reported to police?
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.GbvInformation?.at(0)?.policeReport}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">
                Has your organisation supported a protection order for this
                report?
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.GbvInformation?.at(0)?.protectionOrder}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">
                Did the victim attempt to commit suicide?
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.GbvInformation?.at(0)?.suicideAttempt}
              </h1>
            </div>
          </div>
        </div>
        {/* GBV Information---Row-2 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-6">
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">
                When did the victim attempt to commit suicide?
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.GbvInformation?.at(0)?.suicideTime}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">
                What was the method used
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.GbvInformation?.at(0)?.suicideMethod}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">Number of attempts</h1>
              <h1 className="text-md font-semibold">
                {caseFile?.GbvInformation?.at(0)?.noOfAttempts}
              </h1>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">
                Was the victim satisfied with the service received?
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.GbvInformation?.at(0)?.satisfiedService
                  ? caseFile?.GbvInformation?.at(0)?.satisfiedService
                  : "---"}{" "}
              </h1>
            </div>
            <div className="mt-6">
              <h1 className="text-md text-gray-700">
                Reason NOT satisfied, or any other comments you would like to
                make about this incident
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.GbvInformation?.at(0)?.reasonNotSatisfied}
              </h1>
            </div>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </div>
  );
}

export default CaseFile;
