import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  
  async redirects() {
    return [
      {
        source: '/discord',        // the path on your site
        destination: 'https://discord.gg/DgavuHSaWA',  // your Discord link
        permanent: true,          // false = temporary redirect (307), true = permanent (308)
      },
         ];
  },
};

export default nextConfig;
