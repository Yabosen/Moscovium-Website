# Moscovium Website

A beautiful Flutter web application for downloading the Moscovium program with customizable themes and social media integration.

## Features

- 🌙 **Dark/Light Mode Toggle** - Default dark mode with violet accent
- 🎨 **Customizable Themes** - Choose from 10 different accent colors
- 💜 **Donate Button** - Heart icon button in top left corner
- 📱 **Social Media Links** - Facebook, Twitter, Telegram, Discord in top right
- ⬇️ **Download Button** - Center download button with hover effects
- ⚙️ **Settings Page** - Easy theme customization and configuration
- 🔧 **Easy Modification** - Simple config file for updating links

## Getting Started

### Prerequisites

- Flutter SDK (3.0.0 or higher)
- Dart SDK
- Web browser for testing

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   flutter pub get
   ```

### Running the Application

1. Start the Flutter web server:
   ```bash
   flutter run -d web-server --web-port 8080
   ```

2. Open your browser and navigate to `http://localhost:8080`

## Customization

### Adding/Modifying Links

Edit the `lib/config/app_config.dart` file to update:

- Social media URLs
- Download links
- Donation links
- App information
- Default theme settings

### Example Configuration

```dart
// Update social media links
static const String facebookUrl = 'https://facebook.com/yourpage';
static const String twitterUrl = 'https://twitter.com/yourhandle';

// Update download links
static const String downloadUrl = 'https://yourwebsite.com/download';

// Update donation links
static const String donateUrl = 'https://yourwebsite.com/donate';
```

### Adding New Social Media Platforms

1. Add the URL to `app_config.dart`
2. Add the icon to the `socialIcons` map
3. Update the `SocialLinks` widget to include the new platform

### Theme Customization

The app supports 10 predefined accent colors:
- Purple (default)
- Blue
- Green
- Orange
- Red
- Pink
- Teal
- Indigo
- Amber
- Cyan

Users can switch between dark and light modes and choose their preferred accent color in the Settings page.

## Project Structure

```
lib/
├── config/
│   └── app_config.dart          # Configuration file for easy modification
├── screens/
│   ├── home_screen.dart         # Main landing page
│   └── settings_screen.dart     # Theme customization page
├── theme/
│   └── app_theme.dart          # Theme definitions
├── widgets/
│   ├── donate_button.dart      # Donate button with heart icon
│   ├── download_button.dart    # Main download button
│   └── social_links.dart       # Social media links
└── main.dart                   # App entry point
```

## Features in Detail

### Home Screen
- Gradient background that adapts to theme
- "Moscovium" title with animated border and glow effect
- Donate button with heart icon in top left
- Social media links in top right corner
- Central download button with hover transparency effect

### Settings Screen
- Dark/Light mode toggle
- Accent color picker with 10 color options
- Live preview of theme changes
- Reset to default settings option

### Interactive Elements
- Hover effects on all buttons
- Smooth animations and transitions
- Responsive design for different screen sizes
- Accessibility-friendly color contrasts

## Building for Production

To build the web application for production:

```bash
flutter build web --release
```

The built files will be in the `build/web` directory and can be deployed to any web server.

## Browser Support

This Flutter web app supports all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License.
