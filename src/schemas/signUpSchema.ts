import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be at least 5 characters")
  .max(2, "Username must be less than 20 Characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain Special Characters");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Invalid Email Address" }),
  password: z
    .string()
    .min(6, { message: "Password should be at least 6 characters" }),
});
