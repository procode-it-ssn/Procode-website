"use server";

import { supabase } from "@/lib/server";
import { redirect } from "next/navigation";

export const signOut = async () => {
    await supabase().auth.signOut();
    return redirect("/login");
};