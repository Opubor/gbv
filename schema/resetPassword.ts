import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.string().email().min(1),
});
export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .min(5, { message: "Password must be more than 5 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
export type TForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
export type TResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
