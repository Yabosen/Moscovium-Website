'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, RotateCcw, Check } from 'lucide-react';
import { useTheme } from '@/lib/contexts/theme-context';
import { AppConfig, AccentColor } from '@/lib/config/app-config';
import Navigation from '@/components/navigation';

export default function SettingsPage() {
  const { isDarkMode, accentColor, setDarkMode, setAccentColor, resetTheme } = useTheme();
  const [currentDarkMode, setCurrentDarkMode] = useState(isDarkMode);
  const [currentAccentColor, setCurrentAccentColor] = useState(accentColor);

  // Update CSS variables when theme changes
  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', currentAccentColor.value);
    document.documentElement.setAttribute('data-theme', currentDarkMode ? 'dark' : 'light');
  }, [currentDarkMode, currentAccentColor]);

  const handleDarkModeToggle = (isDark: boolean) => {
    setCurrentDarkMode(isDark);
    setDarkMode(isDark);
  };

  const handleAccentColorChange = (color: AccentColor) => {
    setCurrentAccentColor(color);
    setAccentColor(color);
  };

  const handleReset = () => {
    setCurrentDarkMode(AppConfig.theme.defaultDarkMode);
    setCurrentAccentColor(AppConfig.availableAccentColors[0]);
    resetTheme();
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-gray-400">Customize your experience</p>
        </motion.div>

        {/* Theme Settings Card */}
        <motion.div
          className="card p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2
            className="text-xl font-bold mb-6"
            style={{ color: currentAccentColor.value }}
          >
            Theme Settings
          </h2>

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              {currentDarkMode ? (
                <Moon size={24} style={{ color: currentAccentColor.value }} />
              ) : (
                <Sun size={24} style={{ color: currentAccentColor.value }} />
              )}
              <span className="text-lg font-medium">Dark Mode</span>
            </div>
            <button
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                currentDarkMode ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              onClick={() => handleDarkModeToggle(!currentDarkMode)}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  currentDarkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Accent Color Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Accent Color</h3>
            <div className="grid grid-cols-5 gap-3">
              {AppConfig.availableAccentColors.map((color) => {
                const isSelected = color.value === currentAccentColor.value;
                return (
                  <motion.button
                    key={color.value}
                    className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                      isSelected ? 'border-white scale-110' : 'border-transparent'
                    }`}
                    style={{
                      backgroundColor: color.value,
                      boxShadow: isSelected ? `0 0 20px ${color.value}50` : 'none',
                    }}
                    onClick={() => handleAccentColorChange(color)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={color.name}
                  >
                    {isSelected && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Check size={20} className="text-white" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Preview Card */}
        <motion.div
          className="card p-6 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2
            className="text-xl font-bold mb-4"
            style={{ color: currentAccentColor.value }}
          >
            Preview
          </h2>
          <div
            className="p-6 rounded-lg border-2"
            style={{
              backgroundColor: `${currentAccentColor.value}10`,
              borderColor: currentAccentColor.value,
            }}
          >
            <p className="text-center mb-4">This is how your theme will look</p>
            <div className="text-center">
              <button
                className="btn-primary"
                style={{
                  backgroundColor: currentAccentColor.value,
                }}
              >
                Sample Button
              </button>
            </div>
          </div>
        </motion.div>

        {/* Reset Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            className="btn-outline flex items-center space-x-2 mx-auto"
            style={{
              '--accent-color': '#6b7280',
              borderColor: '#6b7280',
              color: '#6b7280',
            } as React.CSSProperties}
            onClick={handleReset}
          >
            <RotateCcw size={20} />
            <span>Reset to Default</span>
          </button>
        </motion.div>
      </div>

      {/* Navigation */}
      <Navigation />
    </div>
  );
}
