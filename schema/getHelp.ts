import { z } from "zod";

export const getHelpSchema = z.object({
  username: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(1),
  address: z.string().min(1),
  natureOfIncident: z.string().nullable().optional(),
  safetyConcerns: z.string().nullable().optional(),
  additionalDetails: z.string().nullable().optional(),
  emotionalSupport: z.boolean().nullable().optional(),
  infoLocal: z.boolean().nullable().optional(),
  legalAdvice: z.boolean().nullable().optional(),
  shelter: z.boolean().nullable().optional(),
  medicalSupport: z.boolean().nullable().optional(),
  otherSupport: z.string().nullable().optional(),
  immediateDanger: z.boolean().nullable().optional(),
  contactAgreement: z.boolean().nullable().optional(),
});

export const editGetHelpSchema = z.object({
  contacted: z.string().min(1),
});

export type TGetHelpSchema = z.infer<typeof getHelpSchema>;
export type TEditGetHelpSchema = z.infer<typeof editGetHelpSchema>;
