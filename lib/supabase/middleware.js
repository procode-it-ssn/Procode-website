import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export const createClient = (request) => {

  // Create an unmodified response
  let response = NextResponse.next({
    request: {
      headers: {
        'x-pathname': request.nextUrl.pathname,
        ...request.headers
      },
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name) {
          return request.cookies.get(name)?.value;
        },
        set(name, value, options) {
          // If the cookie is updated, update the cookies for the request and response
          request.cookies.set({
            name,
            value,
            ...options,
          });
          response = NextResponse.next({
            headers: {
              'x-pathname': request.nextUrl.pathname,
              ...request.headers
            },
          });
          response.cookies.set({
            name,
            value,
            ...options,
          });
        },
        remove(name, options) {
          // If the cookie is removed, update the cookies for the request and response
          request.cookies.set({
            name,
            value: "",
            ...options,
          });
          response = NextResponse.next({
            headers: {
              ...request.headers,
              'x-pathname': request.nextUrl.pathname,
            },
          });
          response.cookies.set({
            name,
            value: "",
            ...options,
          });
        },
      },
    },
  );

  return { supabase, response };
};
