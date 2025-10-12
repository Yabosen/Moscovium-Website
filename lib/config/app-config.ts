// Configuration file for easy modification of links and settings
export const AppConfig = {
  // Social Media Links - Update these URLs as needed
  socialMedia: {
    facebook: 'https://facebook.com/yourpage',
    twitter: 'https://twitter.com/yourhandle',
    telegram: 'https://t.me/yourchannel',
    discord: 'https://discord.gg/yourserver',
  },
  
  // Download Links - Update these URLs as needed
  download: {
    main: 'https://yourwebsite.com/download',
    windows: 'https://yourwebsite.com/download/windows',
    mac: 'https://yourwebsite.com/download/mac',
    linux: 'https://yourwebsite.com/download/linux',
  },
  
  // Donation Links - Update these URLs as needed
  donation: {
    main: 'https://yourwebsite.com/donate',
    patreon: 'https://patreon.com/yourpage',
    paypal: 'https://paypal.me/yourname',
  },
  
  // App Information
  app: {
    name: 'Moscovium',
    version: '1.0.0',
    description: 'Download Moscovium - Your amazing program',
  },
  
  // Default Theme Settings
  theme: {
    defaultDarkMode: true,
    defaultAccentColor: '#9C27B0', // Purple color
  },
  
  // Available accent colors for customization
  availableAccentColors: [
    { name: 'Purple', value: '#9C27B0' },
    { name: 'Blue', value: '#2196F3' },
    { name: 'Green', value: '#4CAF50' },
    { name: 'Orange', value: '#FF9800' },
    { name: 'Red', value: '#F44336' },
    { name: 'Pink', value: '#E91E63' },
    { name: 'Teal', value: '#009688' },
    { name: 'Indigo', value: '#3F51B5' },
    { name: 'Amber', value: '#FFC107' },
    { name: 'Cyan', value: '#00BCD4' },
  ],
} as const;

export type AccentColor = typeof AppConfig.availableAccentColors[number];
