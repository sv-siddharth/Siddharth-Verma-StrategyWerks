"use client"

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="invisible">{children}</div>; // Hide content until the theme is applied
  }

  //The disableTransitionOnChange prop is added to the NextThemesProvider to prevent the flash of the default theme.
  return (
    <NextThemesProvider disableTransitionOnChange {...props}>
      {children}
    </NextThemesProvider>
  );
}