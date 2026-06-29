import { z } from "zod";

export const UserSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, "Full name is required"),

  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),

  profilePicture: z
    .string()
    .optional(),
});