'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/lib/contexts/theme-context';
import DonateButton from '@/components/donate-button';
import SocialLinks from '@/components/social-links';
import DownloadButton from '@/components/download-button';
import Navigation from '@/components/navigation';

export default function HomePage() {
  const { isDarkMode, accentColor } = useTheme();

  // Update CSS variables when theme changes
  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', accentColor.value);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode, accentColor]);

  return (
    <div className="min-h-screen relative">
      {/* Donate button in top left */}
      <motion.div
        className="absolute top-5 left-5 z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <DonateButton />
      </motion.div>

      {/* Social links in top right */}
      <motion.div
        className="absolute top-5 right-5 z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <SocialLinks />
      </motion.div>

      {/* Main content in center */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          {/* Moscovium title with border */}
          <motion.div
            className="inline-block p-8 mb-16"
            style={{
              border: `3px solid ${accentColor.value}`,
              borderRadius: '20px',
              boxShadow: `0 0 20px ${accentColor.value}40, 0 0 40px ${accentColor.value}20`,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold tracking-wider"
              style={{ color: accentColor.value }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Moscovium
            </motion.h1>
          </motion.div>

          {/* Download button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <DownloadButton />
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation />
    </div>
  );
}
