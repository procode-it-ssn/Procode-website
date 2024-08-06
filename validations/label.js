import { z } from 'zod'
import { isRequired } from ".";

export const labelSchema = z.object({
    name: isRequired('label is required'),
    color: isRequired('color is required'),
    description: z.string().optional()
})