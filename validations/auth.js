import { z } from 'zod';
import { isRequired,isEmail,isAlphabets,isPassword,isPhoneNumber } from '.';

export const loginSchema = z.object({
  email: isEmail,
  password: isPassword
});

export const emailSchema = z.object({
  email: isEmail,
})
export const phoneSchema = z.object({
  phone: isPhoneNumber,
})

export const passwordSchema = z.object({
  password: z.string().min(6, { message: 'Password must be at least 8 characters long' }).max(16, { message: 'Max 16 Characters' }),
  confirmPassword: z.string(),
}).refine(data => data.confirmPassword === data.password, {
  message: 'Passwords do not match',
  path: ["confirmPassword"], // path of error
})