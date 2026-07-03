import { z } from "zod";

export const feedbackSchema = z.object({
  category: z
    .string()
    .trim()
    .min(1, "Category is required"),

  feedback: z
    .string()
    .trim()
    .min(5, "Feedback must be at least 5 characters")
    .max(1000, "Feedback cannot exceed 1000 characters"),

  email: z
    .string()
    .email("Invalid email")
    .optional()
    .or(z.literal(""))
});