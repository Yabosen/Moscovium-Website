"use client";

import { useTheme } from "@/hooks/use-theme";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { generateThemeAction } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Paintbrush, Palette } from "lucide-react";

const hexColorSchema = z.string().regex(/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/, "Must be a valid 3 or 6-digit hex color");

const aiThemeFormSchema = z.object({
  primaryColor: hexColorSchema,
});

export function ThemeCustomizer() {
  const { theme, toggleTheme, customColors, setCustomColors, clearCustomColors } = useTheme();
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const form = useForm<z.infer<typeof aiThemeFormSchema>>({
    resolver: zodResolver(aiThemeFormSchema),
    defaultValues: {
      primaryColor: customColors.primary || "#D8B4FE",
    },
  });

  const handleAiGenerate = async (values: z.infer<typeof aiThemeFormSchema>) => {
    setIsGenerating(true);
    toast({
      title: "Generating Theme...",
      description: "The AI is crafting your new color palette.",
    });
    try {
      const result = await generateThemeAction({ primaryColor: values.primaryColor });
      if (result.success && result.palette) {
        const newColors = {
          primary: values.primaryColor,
          accent: result.palette[0],
        };
        setCustomColors(newColors);
        form.reset({ primaryColor: newColors.primary });
        toast({
          title: "Theme Generated!",
          description: "Your new AI-powered theme has been applied.",
        });
      } else {
        throw new Error(result.error || "Failed to generate theme.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "An unknown error occurred.",
      });
    } finally {
      setIsGenerating(false);
    }
  };
  
  const currentPrimary = customColors.primary || (theme === 'dark' ? '#D8B4FE' : '#8B5CF6');
  const currentAccent = customColors.accent || (theme === 'dark' ? '#A0E7E5' : '#14B8A6');


  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Appearance</h3>
        <div className="flex items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <Label htmlFor="dark-mode">Dark Mode</Label>
            <p className="text-sm text-muted-foreground">
              Toggle between light and dark themes.
            </p>
          </div>
          <Switch
            id="dark-mode"
            checked={theme === "dark"}
            onCheckedChange={toggleTheme}
          />
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium mb-4">AI Theme Generator</h3>
        <div className="rounded-lg border p-4 space-y-4">
          <p className="text-sm text-muted-foreground">
            Generate a new color scheme based on a primary color.
          </p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleAiGenerate)} className="space-y-4">
              <FormField
                control={form.control}
                name="primaryColor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Primary Color</FormLabel>
                    <FormControl>
                      <div className="flex items-center gap-2">
                        <Input placeholder="#D8B4FE" {...field} />
                        <div className="w-8 h-8 rounded-md border" style={{ backgroundColor: field.value }}></div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isGenerating}>
                <Paintbrush className="mr-2 h-4 w-4" />
                {isGenerating ? "Generating..." : "Generate with AI"}
              </Button>
            </form>
          </Form>
        </div>
      </div>

       <Separator />

      <div>
        <h3 className="text-lg font-medium mb-4">Manual Customization</h3>
        <div className="rounded-lg border p-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              Manually set your theme colors. Use the color picker or enter a hex value.
            </p>
            <div className="flex items-center justify-between">
                <Label htmlFor="primary-color-manual" className="flex items-center gap-2">
                    <Palette size={16} className="text-primary"/> Primary
                </Label>
                <Input 
                    id="primary-color-manual" 
                    type="color" 
                    className="p-1 h-8 w-14 block bg-white rounded-lg cursor-pointer"
                    value={currentPrimary}
                    onChange={(e) => setCustomColors({ primary: e.target.value })}
                />
            </div>
            <div className="flex items-center justify-between">
                <Label htmlFor="accent-color-manual" className="flex items-center gap-2">
                    <Palette size={16} className="text-accent"/> Accent
                </Label>
                <Input 
                    id="accent-color-manual" 
                    type="color" 
                    className="p-1 h-8 w-14 block bg-white rounded-lg cursor-pointer"
                    value={currentAccent}
                    onChange={(e) => setCustomColors({ accent: e.target.value })}
                />
            </div>
            <Button variant="ghost" size="sm" onClick={clearCustomColors} className="w-full">Reset to Default Colors</Button>
        </div>
      </div>
    </div>
  );
}
