import {z} from 'zod'

export const isRequired = (message) =>
    z.string().refine((data) => data.trim() !== '', {
        message,
    });

export const isAlphabets = (message) =>
    z.string().refine((data) => /^[a-zA-Z]+$/.test(data), {
        message,
    });

export const isEmail = z.string().email('Email is required');

export const isPassword = z
    .string()
    .min(6, { message: 'Password must be at least 8 characters long' })
    .max(16, { message: 'Max 16 Characters' });

export const isPhoneNumber = z.string().refine((data) => /^[6789]\d{9}$/.test(data), {
    message: 'Invalid phone number',
});