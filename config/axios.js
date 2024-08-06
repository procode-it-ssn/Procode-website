import axios from "axios";

export const API = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? process.env.VERCEL_URL : `${process.env.NEXT_PUBLIC_API_URL}/api`
});