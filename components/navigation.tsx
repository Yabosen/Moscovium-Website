'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from '@/lib/contexts/theme-context';
import { Home, Settings } from 'lucide-react';

const Navigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const { isDarkMode } = useTheme();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-t border-white/10">
      <div className="flex justify-center items-center h-16">
        <div className="flex space-x-8">
          <Link
            href="/"
            className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === 'home'
                ? 'text-white bg-white/20'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
            onClick={() => setActiveTab('home')}
          >
            <Home size={20} />
            <span className="text-xs font-medium">Home</span>
          </Link>
          
          <Link
            href="/settings"
            className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === 'settings'
                ? 'text-white bg-white/20'
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={20} />
            <span className="text-xs font-medium">Settings</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
