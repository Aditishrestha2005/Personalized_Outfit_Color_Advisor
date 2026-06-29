import { z } from "zod";
import { UserSchema } from "../types/user.type";

/**
 * Register User DTO
 */
export const CreateUserDTO = UserSchema.pick({
  fullName: true,
  username: true,
  email: true,
  phone: true,
  password: true,
})
  .extend({
    confirmPassword: z.string().min(6, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type CreateUserDTO = z.infer<typeof CreateUserDTO>;

/**
 * Login User DTO
 */
export const LoginUserDTO = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginUserDTO = z.infer<typeof LoginUserDTO>;

/**
 * Update User DTO
 */
export const UpdateUserDTO = UserSchema.pick({
  fullName: true,
  username: true,
  email: true,
  phone: true,
  profilePicture: true,
}).partial();

export type UpdateUserDTO = z.infer<typeof UpdateUserDTO>;