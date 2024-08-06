import DashboardNavbar from "@/components/DashboardNavbar";
import { getUser } from "@/lib/server";

export default async function DashboardLayout({ children }) {
  await getUser({ redirect: true });
  return (
    <main className="flex flex-1 flex-col w-full mx-auto px-8 dark:bg-slate-800">
      <DashboardNavbar />
      {children}
    </main>
  );
}
