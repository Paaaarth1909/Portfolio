"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const current = resolvedTheme ?? "light";

  if (!mounted) {
    return (
      <Button type="button" variant="link" size="icon" className={cn(className)} aria-hidden>
        <SunIcon className="h-full w-full opacity-0" />
      </Button>
    );
  }

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn(className)}
      onClick={() => setTheme(current === "dark" ? "light" : "dark")}
      aria-label={current === "dark" ? "Switch to light" : "Switch to dark"}
    >
      {current === "dark" ? <MoonIcon className="h-full w-full" /> : <SunIcon className="h-full w-full" />}
    </Button>
  );
}
