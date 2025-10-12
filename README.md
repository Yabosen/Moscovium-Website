# Moscovium Website

A beautiful Next.js web application for downloading the Moscovium program with customizable themes and social media integration.

## Features

- 🌙 **Dark/Light Mode Toggle** - Default dark mode with violet accent
- 🎨 **Customizable Themes** - Choose from 10 different accent colors
- 💜 **Donate Button** - Heart icon button in top left corner
- 📱 **Social Media Links** - Facebook, Twitter, Telegram, Discord in top right
- ⬇️ **Download Button** - Center download button with hover effects
- ⚙️ **Settings Page** - Easy theme customization and configuration
- 🔧 **Easy Modification** - Simple config file for updating links
- 🚀 **Modern Tech Stack** - Built with Next.js 14, TypeScript, and Tailwind CSS
- ✨ **Smooth Animations** - Powered by Framer Motion

## Getting Started

### Prerequisites

- Node.js (18.0 or higher)
- npm or yarn
- Web browser for testing

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:3000`

## Customization

### Adding/Modifying Links

Edit the `lib/config/app-config.ts` file to update:

- Social media URLs
- Download links
- Donation links
- App information
- Default theme settings

### Example Configuration

```typescript
// Update social media links
socialMedia: {
  facebook: 'https://facebook.com/yourpage',
  twitter: 'https://twitter.com/yourhandle',
  // ...
},

// Update download links
download: {
  main: 'https://yourwebsite.com/download',
  // ...
},

// Update donation links
donation: {
  main: 'https://yourwebsite.com/donate',
  // ...
}
```

### Adding New Social Media Platforms

1. Add the URL to `app-config.ts`
2. Import the appropriate icon from `lucide-react`
3. Update the `SocialLinks` component to include the new platform

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
├── app/
│   ├── globals.css             # Global styles and CSS variables
│   ├── layout.tsx              # Root layout component
│   ├── page.tsx                # Home page
│   └── settings/
│       └── page.tsx            # Settings page
├── components/
│   ├── donate-button.tsx       # Donate button with heart icon
│   ├── download-button.tsx     # Main download button
│   ├── navigation.tsx          # Bottom navigation
│   └── social-links.tsx        # Social media links
├── lib/
│   ├── config/
│   │   └── app-config.ts       # Configuration file for easy modification
│   └── contexts/
│       └── theme-context.tsx   # Theme context and provider
└── package.json                # Dependencies and scripts
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
npm run build
# or
yarn build
```

To start the production server:

```bash
npm start
# or
yarn start
```

The built files will be in the `.next` directory and can be deployed to any hosting platform that supports Node.js.

## Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended) - Zero-config deployment
- **Netlify** - Static site generation
- **AWS Amplify** - Full-stack deployment
- **Railway** - Simple Node.js hosting
- Any Node.js hosting provider

## Browser Support

This Next.js web app supports all modern browsers:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License.
