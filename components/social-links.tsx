'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, MessageCircle, Users } from 'lucide-react';
import { useTheme } from '@/lib/contexts/theme-context';
import { AppConfig } from '@/lib/config/app-config';

interface SocialButtonProps {
  icon: React.ReactNode;
  href: string;
  label: string;
  accentColor: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, href, label, accentColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(href, '_blank');
  };

  return (
    <motion.button
      className="social-btn"
      style={{
        '--accent-color': accentColor,
        borderColor: accentColor,
        color: isHovered ? 'white' : accentColor,
        backgroundColor: isHovered ? accentColor : 'transparent',
      } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      aria-label={label}
    >
      {icon}
    </motion.button>
  );
};

const SocialLinks: React.FC = () => {
  const { accentColor } = useTheme();

  const socialLinks = [
    {
      icon: <Facebook size={20} />,
      href: AppConfig.socialMedia.facebook,
      label: 'Facebook',
    },
    {
      icon: <Twitter size={20} />,
      href: AppConfig.socialMedia.twitter,
      label: 'Twitter',
    },
    {
      icon: <MessageCircle size={20} />,
      href: AppConfig.socialMedia.telegram,
      label: 'Telegram',
    },
    {
      icon: <Users size={20} />,
      href: AppConfig.socialMedia.discord,
      label: 'Discord',
    },
  ];

  return (
    <div className="flex space-x-3">
      {socialLinks.map((link, index) => (
        <motion.div
          key={link.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <SocialButton
            icon={link.icon}
            href={link.href}
            label={link.label}
            accentColor={accentColor.value}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default SocialLinks;
