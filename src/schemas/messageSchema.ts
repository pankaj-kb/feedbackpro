import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Content Must be at least of 10 characters" })
    .max(100, { message: "Content Can't be more than 100 characters" }),
});
