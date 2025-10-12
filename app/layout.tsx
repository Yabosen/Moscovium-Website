import type { Metadata } from 'next';
import { ThemeProvider } from '@/lib/contexts/theme-context';
import './globals.css';

export const metadata: Metadata = {
  title: 'Moscovium - Download Your Amazing Program',
  description: 'A beautiful website for downloading the Moscovium program with customizable themes and social media integration.',
  keywords: 'moscovium, download, program, software',
  authors: [{ name: 'Moscovium Team' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
