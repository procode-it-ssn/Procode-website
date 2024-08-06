import "../../globals.css";
import Providers from "@/context/Providers";
import { GeistSans } from "geist/font/sans";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Procode | SSN IT",
  description: "-------",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.className}>
      <body className="min-h-screen flex flex-1 flex-col items-center">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
