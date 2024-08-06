import { supabase } from "@/lib/server";
import { NextResponse } from "next/server";

export const PATCH = async (request, { params }) => {
  try {
    const { id } = params;
    const body = await request.json();

    const { error } = await supabase().from("events").update(body).eq("id", id);

    if (error) {
      console.log(error);
      throw error;
    }

    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: error.message || "Error Occured, Try again later!" },
      { status: 401 }
    );
  }
};
