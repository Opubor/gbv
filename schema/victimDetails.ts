import { z } from "zod";

export const victimDetailsSchema = z.object({
  caseId: z.string().min(1),
  newClient: z.string().min(1),
  residentialVillage: z.string().min(1),
  secondVillage: z.string().min(1),
  dob: z.string().min(1),
  age: z.string().min(1),
  sex: z.string().min(1),
  nationality: z.string().min(1),
  maritalStatus: z.string().min(1),
  mainActivity: z.string().min(1),
  religion: z.string().min(1),
  disabled: z.string().min(1),
  typeOfDisability: z.string().nullable().optional(),
  incidentVillage: z.string().min(1),
  incidentLocation: z.string().min(1),
  incidentTime: z.string().min(1),
  violenceType: z.string().min(1),
  causeOfViolence: z.string().min(1),
  perpetratorSex: z.string().min(1),
  perpetratorSurvivorRelationship: z.string().min(1),
  immediateProtection: z.string().min(1),
});

export const editVictimDetailsSchema = z.object({
  newClient: z.string().min(1),
  residentialVillage: z.string().min(1),
  secondVillage: z.string().min(1),
  dob: z.string().min(1),
  age: z.string().min(1),
  sex: z.string().min(1),
  nationality: z.string().min(1),
  maritalStatus: z.string().min(1),
  mainActivity: z.string().min(1),
  religion: z.string().min(1),
  disabled: z.string().min(1),
  typeOfDisability: z.string().nullable().optional(),
  incidentVillage: z.string().min(1),
  incidentLocation: z.string().min(1),
  incidentTime: z.string().min(1),
  violenceType: z.string().min(1),
  causeOfViolence: z.string().min(1),
  perpetratorSex: z.string().min(1),
  perpetratorSurvivorRelationship: z.string().min(1),
  immediateProtection: z.string().min(1),
});

export type TVictimDetailsSchema = z.infer<typeof victimDetailsSchema>;
export type TEditVictimDetailsSchema = z.infer<typeof editVictimDetailsSchema>;
