'use server';

/**
 * @fileOverview AI-powered color palette generator.
 *
 * - generateColorPalette - A function that generates a color palette based on a primary color.
 * - GenerateColorPaletteInput - The input type for the generateColorPalette function.
 * - GenerateColorPaletteOutput - The return type for the generateColorPalette function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateColorPaletteInputSchema = z.object({
  primaryColor: z
    .string()
    .regex(/^#([0-9A-Fa-f]{3}){1,2}$/)
    .describe('The primary hex color code to generate the palette from.'),
  numColors: z.number().min(3).max(7).default(5).describe('The number of colors to generate in the palette.  Must be between 3 and 7.'),
});
export type GenerateColorPaletteInput = z.infer<typeof GenerateColorPaletteInputSchema>;

const GenerateColorPaletteOutputSchema = z.object({
  palette: z.array(z.string().regex(/^#([0-9A-Fa-f]{3}){1,2}$/)).describe('An array of hex color codes that complement the primary color.'),
});
export type GenerateColorPaletteOutput = z.infer<typeof GenerateColorPaletteOutputSchema>;

export async function generateColorPalette(input: GenerateColorPaletteInput): Promise<GenerateColorPaletteOutput> {
  return generateColorPaletteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateColorPalettePrompt',
  input: {schema: GenerateColorPaletteInputSchema},
  output: {schema: GenerateColorPaletteOutputSchema},
  prompt: `You are an AI color palette generator.  You will generate a complementary color palette of {{numColors}} colors based on the provided primary color.

Primary Color: {{{primaryColor}}}

Output the palette as a JSON array of hex color codes.

\`\`\`
{
  "palette": [ /* array of hex color codes */ ]
}
\`\`\``,
});

const generateColorPaletteFlow = ai.defineFlow(
  {
    name: 'generateColorPaletteFlow',
    inputSchema: GenerateColorPaletteInputSchema,
    outputSchema: GenerateColorPaletteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
