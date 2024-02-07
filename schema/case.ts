import { z } from "zod";

export const caseSchema = z.object({
  registeredBy: z.string().min(1),
  registrationDate: z.string().min(1),
  registrationTime: z.string().min(1),
  incidentDate: z.string().min(1),
  region: z.string().min(1),
  serviceProviderId: z.string().min(1),
  serviceProviderReferralId: z.string().nullable().optional(),
  tbid: z.string().nullable().optional(),
});

export type TCaseSchema = z.infer<typeof caseSchema>;
