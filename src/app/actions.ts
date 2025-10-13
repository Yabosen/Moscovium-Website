"use server";

import { generateColorPalette } from "@/ai/flows/generate-color-palette";
import { z } from "zod";

const hexColorSchema = z.string().regex(/^#([0-9A-Fa-f]{3,4}|[0-9A-Fa-f]{6,8})$/);

const actionInputSchema = z.object({
  primaryColor: hexColorSchema,
});

export async function generateThemeAction(
  input: z.infer<typeof actionInputSchema>
): Promise<{ success: boolean; palette?: string[]; error?: string }> {
  const parsedInput = actionInputSchema.safeParse(input);
  if (!parsedInput.success) {
    return { success: false, error: "Invalid input." };
  }

  try {
    const result = await generateColorPalette({
      primaryColor: parsedInput.data.primaryColor,
      numColors: 3,
    });

    if (result.palette && result.palette.length > 0) {
      return { success: true, palette: result.palette };
    } else {
      return { success: false, error: "AI model returned an empty palette." };
    }
  } catch (error) {
    console.error("Error generating theme:", error);
    return {
      success: false,
      error: "An error occurred while communicating with the AI model.",
    };
  }
}
