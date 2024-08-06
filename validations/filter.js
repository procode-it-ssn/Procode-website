import { z } from 'zod'
import { isRequired } from ".";

export const filterSchema = z.object({
    name: isRequired('filter name is required'),
    label: isRequired('label is required'),
})