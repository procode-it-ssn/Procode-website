import { z } from "zod";
import { isRequired } from ".";

export const eventSchema = z
  .object({
    name: isRequired("Event Name is required"),
    description: isRequired("Description is required"),
    is_handson: z.boolean().default(false),
    is_published: z.boolean().default(false),
    start_date: z.date().min(new Date("2022-11-18"), "Invalid Date"),
    end_date: z.date().nullable().optional(),
  })
  .transform((data) => {
    // If end_date is not provided, set it to the same value as start_date
    if (!data.end_date) {
      data.end_date = data.start_date;
    }
    return data;
  })
  .refine(
    (data) => {
      // Ensure end_date is the same as or after start_date
      return data.end_date >= data.start_date;
    },
    {
      message: "End date must be after the start date",
      path: ["end_date"],
    }
  );
