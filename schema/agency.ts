import { z } from "zod";

export const agencySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone1: z.string().min(1),
  phone2: z.string().nullable().optional(),
  founded: z.string().nullable().optional(),
  city: z.string().min(1),
  address: z.string().min(1),
  about: z.string().nullable().optional(),
  branch: z.string().nullable().optional(),
});

export type TAgencySchema = z.infer<typeof agencySchema>;
