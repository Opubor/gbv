import React from "react";
import { getCase } from "@/services/case";
import { FaBook } from "react-icons/fa";
import { BsPerson, BsPersonArmsUp } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { BiBookHeart } from "react-icons/bi";

type PageProps = {
  params: { id: string };
};

async function Page({ params }: PageProps) {
  const caseFile = await getCase(params.id);

  return (
    <div className="bg-white rounded-lg p-4 w-full">
      {/* ===Header=== */}
      <div className="bg-purple-50 p-2 rounded-t-md">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <FaBook /> CASE ID - {caseFile?.caseId}
        </h1>
      </div>

      {/* ===Service Provider=== */}
      <div className="mt-6 px-2">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 border-4 border-double border-purple-500 rounded-md flex flex-col justify-center items-center">
            <BiBookHeart className="text-7xl text-themeColor" />
            <h1 className="font-bold text-2xl font-serif">Service Provider</h1>
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
      <div className="mt-3 py-3 px-2 bg-purple-50">
        <div className="grid grid-cols-4 gap-4">
          {/* Victim Details---Row 1 */}
          <div className="col-span-1 border-4 border-double border-purple-500 rounded-md flex flex-col justify-center items-center">
            <BsPerson className="text-7xl text-themeColor" />
            <h1 className="font-bold text-2xl font-serif">Victim Details</h1>
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
        </div>
        {/* Victim detail---Row-2 */}
        <div className="grid grid-cols-4 gap-4 mt-6">
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
      </div>

      {/* ===Perpetrator Details=== */}
      <div className="mt-3 py-3 px-2">
        {/* Perpetrator Details---Row 1 */}
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 border-4 border-double border-purple-500 rounded-md flex flex-col justify-center items-center">
            <BsPerson className="text-7xl text-themeColor" />
            <h1 className="font-bold text-2xl font-serif">
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
        <div className="grid grid-cols-4 gap-4 mt-6">
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
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
        </div>
      </div>

      {/* ===GBV Information=== */}
      <div className="mt-3 py-3 px-2 bg-purple-50">
        {/* GBV Information---Row 1 */}
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-1 border-4 border-double border-purple-500 rounded-md flex flex-col justify-center items-center">
            <HiInformationCircle className="text-7xl text-themeColor" />
            <h1 className="font-bold text-2xl font-serif">GBV Information</h1>
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
                Did the victim attempt to committ suicide?
              </h1>
              <h1 className="text-md font-semibold">
                {caseFile?.GbvInformation?.at(0)?.suicideAttempt}
              </h1>
            </div>
          </div>
        </div>
        {/* GBV Information---Row-2 */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="col-span-1">
            <div>
              <h1 className="text-md text-gray-700">
                When did the victim attempt to committ suicide?
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

export default Page;
