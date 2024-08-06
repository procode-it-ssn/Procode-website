import { signOut } from "@/app/_actions/user";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

import ThemeSwitcher from "./ThemeSwitcher";
import LogoSwitch from "./LogoSwitch";

export default function DashboardNavbar() {
  return (
    <nav className="flex justify-between items-center px-4 h-16 mb-8">
      <LogoSwitch />
      <div className="flex gap-2 items-center">
        <ThemeSwitcher />
        <form action={signOut} className="flex">
          <Button
            className="flex justify-between w-full hover:bg-destructive hover:text-white"
            variant="outline"
          >
            <>
              <LogOut className="h-4 w-4" aria-hidden="true" />
            </>
          </Button>
        </form>
      </div>
    </nav>
  );
}
