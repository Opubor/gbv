import { z } from "zod";

export const searchSchema = z.object({
  search: z.string().nullable().optional(),
});

export type TSearchSchema = z.infer<typeof searchSchema>;
