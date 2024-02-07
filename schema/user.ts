import { z } from "zod";

export const userSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  role: z.string().min(1),
  branch: z.string().min(1),
  email: z.string().email(),
  password: z
    .string()
    .min(5, { message: "Password must be more than 5 characters" }),
  gender: z.string().nullable().optional(),
  phoneNumber: z.string().nullable().optional(),
});

export const registerUserSchema = z
  .object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    role: z.string().min(1),
    branch: z.string().min(1),
    email: z.string().email(),
    password: z
      .string()
      .min(5, { message: "Password must be more than 5 characters" }),
    gender: z.string().nullable().optional(),
    phoneNumber: z.string().nullable().optional(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export const editUserSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  role: z.string().min(1),
  email: z.string().email(),
  gender: z.string().nullable().optional(),
  phoneNumber: z.string().nullable().optional(),
  branch: z.string().min(1),
});

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
export const editProfileSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phoneNumber: z.string().nullable().optional(),
  gender: z.string().nullable().optional(),
});

export const updatePasswordSchema = z
  .object({
    currentPassword: z.string(),
    newPassword: z
      .string()
      .min(5, { message: "Password must be more than 5 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

//   ====================================================

export type TUserSchema = z.infer<typeof userSchema>;
export type TRegisterUserSchema = z.infer<typeof registerUserSchema>;
export type TLoginUserSchema = z.infer<typeof loginUserSchema>;
export type TEditProfileSchema = z.infer<typeof editProfileSchema>;
export type TUpdatePasswordSchema = z.infer<typeof updatePasswordSchema>;
export type TEditUserSchema = z.infer<typeof editUserSchema>;
