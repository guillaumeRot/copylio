"use client";

// import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export type ProvidersProps = PropsWithChildren;

export const Providers = (props: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
          {/* <Toaster /> */}
          {props.children}
    </QueryClientProvider>
  );
};
