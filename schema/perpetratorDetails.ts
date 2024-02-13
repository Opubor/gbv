import { z } from "zod";

export const perpetratorDetailsSchema = z.object({
  caseId: z.string().min(1),
  noOfPerpetrators: z.string().min(1),
  contactWithPerpetrator: z.string().min(1),
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
  protectionOrder: z.string().min(1),
  fullName: z.string().min(1),
  aka: z.string().nullable().optional(),
});
export const editPerpetratorDetailsSchema = z.object({
  noOfPerpetrators: z.string().min(1),
  contactWithPerpetrator: z.string().min(1),
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
  protectionOrder: z.string().min(1),
  fullName: z.string().min(1),
  aka: z.string().nullable().optional(),
});

export type TPerpetratorDetailsSchema = z.infer<
  typeof perpetratorDetailsSchema
>;
export type TEditPerpetratorDetailsSchema = z.infer<
  typeof editPerpetratorDetailsSchema
>;
