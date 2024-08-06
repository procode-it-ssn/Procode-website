import "server-only";

import { createClient } from "@/lib/supabase/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

const isCurrentRouteCheck = (routeName) => {
  const pathname = headers().get("x-pathname");

  return pathname === routeName;
};

export const supabase = () => {
  const cookieStore = cookies();
  return createClient(cookieStore);
};

export const getUser = async (options = { redirect: false }) => {
  const LOGIN_ROUTE = isCurrentRouteCheck("/login");

  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user: _user },
  } = await supabase.auth.getUser();

  if (!_user) {
    if (options?.redirect && !LOGIN_ROUTE) {
      redirect("/login");
    }
    return null;
  }

  return _user;
};