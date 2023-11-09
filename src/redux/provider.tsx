"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export function ReduxProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </Provider>
  );
}
