'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { useTheme } from '@/lib/contexts/theme-context';
import { AppConfig } from '@/lib/config/app-config';

const DownloadButton: React.FC = () => {
  const { accentColor } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Open download link in new tab
    window.open(AppConfig.download.main, '_blank');
  };

  return (
    <motion.button
      className="btn-primary flex items-center space-x-3 px-8 py-4 text-lg font-bold hover-glow"
      style={{
        '--accent-color': accentColor.value,
        backgroundColor: accentColor.value,
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ 
        scale: 1.05,
        y: -2,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <Download size={28} />
      </motion.div>
      <span>Download Moscovium</span>
    </motion.button>
  );
};

export default DownloadButton;
