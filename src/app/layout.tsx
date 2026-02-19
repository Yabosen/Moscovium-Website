import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Moscovium',
  description: 'Moscovium Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storageKey = 'moscovium-theme';
                  const theme = localStorage.getItem(storageKey) || 'dark';
                  document.documentElement.classList.add(theme);
                  
                  const savedColors = localStorage.getItem(storageKey + '-colors');
                  if (savedColors) {
                    const colors = JSON.parse(savedColors);
                    const root = document.documentElement;
                    
                     // Helper to convert hex to HSL (simplified version of the one in utils)
                    function hexToHsl(hex) {
                      let r = 0, g = 0, b = 0;
                      if (hex.length === 4) {
                        r = parseInt("0x" + hex[1] + hex[1]);
                        g = parseInt("0x" + hex[2] + hex[2]);
                        b = parseInt("0x" + hex[3] + hex[3]);
                      } else if (hex.length === 7) {
                        r = parseInt("0x" + hex[1] + hex[2]);
                        g = parseInt("0x" + hex[3] + hex[4]);
                        b = parseInt("0x" + hex[5] + hex[6]);
                      }
                      r /= 255; g /= 255; b /= 255;
                      const cmin = Math.min(r,g,b), cmax = Math.max(r,g,b), delta = cmax - cmin;
                      let h = 0, s = 0, l = 0;
                      if (delta === 0) h = 0;
                      else if (cmax === r) h = ((g - b) / delta) % 6;
                      else if (cmax === g) h = (b - r) / delta + 2;
                      else h = (r - g) / delta + 4;
                      h = Math.round(h * 60);
                      if (h < 0) h += 360;
                      l = (cmax + cmin) / 2;
                      s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
                      s = +(s * 100).toFixed(1);
                      l = +(l * 100).toFixed(1);
                      return h + " " + s + "% " + l + "%";
                    }

                    if (colors.primary) root.style.setProperty('--primary', hexToHsl(colors.primary));
                    if (colors.accent) root.style.setProperty('--accent', hexToHsl(colors.accent));
                    if (colors.background) root.style.setProperty('--background', hexToHsl(colors.background));
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <ThemeProvider defaultTheme="dark" storageKey="moscovium-theme">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
