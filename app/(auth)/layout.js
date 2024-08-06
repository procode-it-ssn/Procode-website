import "../globals.css";
import Providers from "@/context/Providers";
import { GeistSans } from "geist/font/sans";
import { getUser } from "@/lib/server";
import { redirect } from "next/navigation";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Procode | SSN IT",
  description: "-------",
};

export default async function RootLayout({ children }) {
  const user = await getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen flex flex-1 flex-col items-center px-4 pb-4 dark:bg-slate-800">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
