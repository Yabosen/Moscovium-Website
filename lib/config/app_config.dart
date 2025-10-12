// Configuration file for easy modification of links and settings
class AppConfig {
  // Social Media Links - Update these URLs as needed
  static const String facebookUrl = 'https://facebook.com/yourpage';
  static const String twitterUrl = 'https://twitter.com/yourhandle';
  static const String telegramUrl = 'https://t.me/yourchannel';
  static const String discordUrl = 'https://discord.gg/yourserver';
  
  // Download Links - Update these URLs as needed
  static const String downloadUrl = 'https://yourwebsite.com/download';
  static const String downloadUrlWindows = 'https://yourwebsite.com/download/windows';
  static const String downloadUrlMac = 'https://yourwebsite.com/download/mac';
  static const String downloadUrlLinux = 'https://yourwebsite.com/download/linux';
  
  // Donation Links - Update these URLs as needed
  static const String donateUrl = 'https://yourwebsite.com/donate';
  static const String patreonUrl = 'https://patreon.com/yourpage';
  static const String paypalUrl = 'https://paypal.me/yourname';
  
  // App Information
  static const String appName = 'Moscovium';
  static const String appVersion = '1.0.0';
  static const String appDescription = 'Download Moscovium - Your amazing program';
  
  // Default Theme Settings
  static const bool defaultDarkMode = true;
  static const int defaultAccentColor = 0xFF9C27B0; // Purple color
  
  // Social Media Icons - You can change these if needed
  static const Map<String, String> socialIcons = {
    'facebook': 'facebook',
    'twitter': 'alternate_email',
    'telegram': 'telegram',
    'discord': 'discord',
  };
  
  // Available accent colors for customization
  static const List<int> availableAccentColors = [
    0xFF9C27B0, // Purple
    0xFF2196F3, // Blue
    0xFF4CAF50, // Green
    0xFFFF9800, // Orange
    0xFFF44336, // Red
    0xFFE91E63, // Pink
    0xFF009688, // Teal
    0xFF3F51B5, // Indigo
    0xFFFFC107, // Amber
    0xFF00BCD4, // Cyan
  ];
}
