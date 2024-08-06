import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/middleware";

export async function middleware(request) {
    try {
        // This `try/catch` block is only here for the interactive tutorial.
        // Feel free to remove once you have Supabase connected.
        const { supabase, response } = createClient(request);

        // Refresh session if expired - required for Server Components
        // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
        await supabase.auth.getSession();

        return response;
    } catch (e) {

        return NextResponse.next({
            headers: {
                'x-pathname': request.nextUrl.pathname,
                ...request.headers
            }
        });
    }
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        "/((?!_next/static|_next/image|favicon.ico).*)",
    ],
};
