"use client";
import Logo from "@/assets/icon.svg";
import ColorLogo from "@/assets/icon-color.svg";
import Image from "next/image";
import { useTheme } from "next-themes";
import useMounted from "@/hooks/useMounted";

export default function LogoSwitch() {
  const { theme } = useTheme();
  const mounted = useMounted();

  if (!mounted)
    return <Image src={Logo} width={45} height={45} alt="navLogo-dark" />;

  return (
    <>
      {theme === "dark" ? (
        <Image src={Logo} width={45} height={45} alt="navLogo-dark" />
      ) : (
        <Image src={ColorLogo} width={45} height={45} alt="navLogo-light" />
      )}
    </>
  );
}
