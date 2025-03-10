"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

export default function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(
        className,
        pathname == href
          ? "cursor-pointer bg-gradient-to-tr  from-cyan-500  to-blue-700 drop-shadow-lg  text-gray-50 dark:text-white text-center"
          : "cursor-pointer dark:text-gray-300 text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white text-center",
        "px-6 py-2 rounded-md font-semibold"
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
