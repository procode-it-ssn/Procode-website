"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { TailwindIndicator } from "@/components/TailwindIndicator";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "next-themes";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class">
        {children}
        <Toaster richColors closeButton />
        <TailwindIndicator />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
