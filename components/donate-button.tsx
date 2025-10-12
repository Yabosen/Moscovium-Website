'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useTheme } from '@/lib/contexts/theme-context';
import { AppConfig } from '@/lib/config/app-config';

const DonateButton: React.FC = () => {
  const { accentColor } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Open donation link in new tab
    window.open(AppConfig.donation.main, '_blank');
  };

  return (
    <motion.button
      className="btn-outline flex items-center space-x-2 hover-scale"
      style={{
        '--accent-color': accentColor.value,
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        animate={{
          color: isHovered ? 'white' : accentColor.value,
        }}
        transition={{ duration: 0.2 }}
      >
        <Heart size={20} fill={isHovered ? 'white' : accentColor.value} />
      </motion.div>
      <motion.span
        className="font-bold"
        animate={{
          color: isHovered ? 'white' : accentColor.value,
        }}
        transition={{ duration: 0.2 }}
      >
        Donate
      </motion.span>
    </motion.button>
  );
};

export default DonateButton;
