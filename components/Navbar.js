import Image from "next/image";
import { MobileNav } from "./MobileNav";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";
import { sidebarNav } from "@/config";
import MobileLink from "./MobileLink";

export default function Navbar() {
  return (
    <nav className="dark:bg-gray-800 bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl w-full mx-auto flex sm:grid sm:grid-cols-3 items-center justify-between h-16 px-2 sm:px-6 lg:px-8">
        <MobileNav />
        <Link href={"/"}>
          <div className="flex items-center cursor-pointer">
            <Image
              className="h-10 w-auto"
              src="/procode-logo.svg"
              alt="Workflow"
              height={45}
              width={45}
            />
            <Image
              className="hidden lg:block h-[20px] ml-4 w-auto"
              src="/procode-text.svg"
              height={45}
              width={45}
              alt="Workflow"
            />
          </div>
        </Link>

        <div className="hidden sm:flex justify-center items-center gap-x-2 h-full">
          {sidebarNav?.map(
            (item) =>
              item.href && (
                <MobileLink
                  key={item.href}
                  href={item.href}
                >
                  {item.title}
                </MobileLink>
              )
          )}
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
