import { headers, cookies } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Logo from "@/assets/icon-color.svg";
import Image from "next/image";

export default async function Login({ searchParams }) {
  const signIn = async (formData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email");
    const password = formData.get("password");
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      redirect("/login?message=Could not authenticate user");
    }

    console.log("Redirecting to events");

    redirect(`${origin}/events`);
  };

  return (
    <div className="flex-1 flex flex-col items-center w-full px-4 gap-4 max-w-sm mt-10">
      <Image src={Logo} className="w-[115px]"/>
      <div className="w-full">
        <div className="text-2xl font-thin mb-8 leading-relaxed text-center">Signin into <span className="font-bold">Procode</span></div>
        <form
          className="flex flex-col w-full justify-center gap-4 text-foreground"
          action={signIn}
        >
          <Label htmlFor="email">
            Email
          </Label>
          <Input
            className="mb-2"
            name="email"
            placeholder="you@example.com"
            required
          />
          <Label htmlFor="password">
            Password
          </Label>
          <Input
            className="mb-2"
            type="password"
            name="password"
            placeholder="••••••••"
            required
          />
          <Button>Sign In</Button>
          {searchParams?.message && (
            <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
              {searchParams.message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
