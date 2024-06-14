import { z } from "zod";

export const SignInSchema = z.object({
    username: z.string().min(0, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(0, {
      message: "Password must be at least 2 characters.",
    }),
  })