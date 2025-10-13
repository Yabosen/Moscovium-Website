'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SettingsSheet } from "@/components/settings-sheet";
import Link from "next/link";
import { siteConfig } from "@/app/config";
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { Heart } from 'lucide-react';

export default function Home() {
  const [logoClicks, setLogoClicks] = useState(0);
  const [isCrumbling, setIsCrumbling] = useState(false);
  const [showKonami, setShowKonami] = useState(false);
  const keySequence = useRef<string[]>([]);
  const { toast } = useToast();

  const handleLogoClick = () => {
    if (isCrumbling) return;
    const newCount = logoClicks + 1;
    setLogoClicks(newCount);

    if (newCount >= 10) {
      toast({
        title: "Self-destruct sequence activated!",
        description: "Goodbye, cruel world!",
      });
      setIsCrumbling(true);
      setLogoClicks(0);
    } else if (newCount > 5) {
      toast({
        title: `Warning: ${10 - newCount} clicks to detonation.`,
      });
    }
  };

  const handleKonamiCode = useCallback((event: KeyboardEvent) => {
    const konamiCode = ["w", "a", "s", "d"];
    keySequence.current.push(event.key.toLowerCase());
    if (keySequence.current.length > konamiCode.length) {
      keySequence.current.shift();
    }
    if (JSON.stringify(keySequence.current) === JSON.stringify(konamiCode)) {
      setShowKonami(true);
      keySequence.current = [];
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKonamiCode);
    return () => {
      window.removeEventListener('keydown', handleKonamiCode);
    };
  }, [handleKonamiCode]);

  return (
    <div 
      className={cn("flex flex-col min-h-screen bg-background transition-all duration-500", isCrumbling && 'animate-crumble')}
      style={siteConfig.backgroundUrl ? { backgroundImage: `url(${siteConfig.backgroundUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      <header className="relative z-10 p-4 sm:p-6 flex justify-between items-center w-full">
        <div className="flex-1 flex justify-start">
            <Link href={siteConfig.donationLink} passHref>
                <Button 
                variant="outline"
                className="bg-transparent border-primary/50 text-primary/80 hover:bg-primary/10 hover:text-primary"
                >
                <Heart className="mr-2 h-4 w-4 fill-primary" />
                Donate
                </Button>
            </Link>
        </div>
        <div 
          onClick={handleLogoClick} 
          style={{ animationDelay: '100ms' }} 
          className="animate-fly-in cursor-pointer flex-1 text-center"
        >
          <Card className="bg-transparent border-0 shadow-none inline-block">
            <CardHeader className="p-0">
              <CardTitle className="text-4xl md:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-primary via-accent to-primary hover:opacity-80 transition-opacity">
                Moscovium
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
        <div style={{ animationDelay: '300ms' }} className="flex flex-1 items-center justify-end gap-2 animate-fade-in-up">
          {siteConfig.socialLinks.map((link, index) => (
            <Link href={link.href} passHref key={index}>
              <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground hover:bg-primary/10">
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Button>
            </Link>
          ))}
          <SettingsSheet />
        </div>
      </header>

      <main className="relative z-10 flex-grow flex flex-col items-center justify-center text-center p-4">
        
        <p style={{ animationDelay: '500ms' }} className="mt-4 max-w-xl mx-auto text-foreground/70 md:text-lg animate-fade-in-up">
          A sophisticated application for modern digital creators.
        </p>

        <div style={{ animationDelay: '700ms' }} className="mt-8 animate-pop-in">
          <Link href={siteConfig.downloadLink} passHref>
            <Button 
              size="lg" 
              className="h-12 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-transparent hover:text-primary border-2 border-primary transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/20"
            >
              Download Now
            </Button>
          </Link>
        </div>
      </main>

      {showKonami && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/HCLQn-OCdEA?autoplay=1" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
           <Button variant="destructive" className="absolute top-4 right-4" onClick={() => setShowKonami(false)}>Close</Button>
        </div>
      )}

      <footer style={{ animationDelay: '1500ms' }} className="relative z-10 text-center p-4 text-foreground/50 text-sm animate-fade-in-up">
        © {new Date().getFullYear()} Moscovium. All Rights Reserved.
      </footer>
    </div>
  );
}
