"use client";

import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeCustomizer } from "./theme-customizer";

export function SettingsSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground hover:bg-primary/10">
          <Settings className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>
            Customize the appearance of the application. Changes are saved automatically.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <ThemeCustomizer />
        </div>
      </SheetContent>
    </Sheet>
  );
}
