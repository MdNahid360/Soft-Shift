/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';
const nextConfig = {
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co'
       },
       {
        protocol: 'https',
        hostname: 'images.unsplash.com'
       },
       {
        protocol: 'https',
        hostname: 'randomuser.me'
       },
       {
        protocol: 'https',
        hostname: 'xsgames.co'
       },
       {
        protocol: 'https',
        hostname: 'img.freepik.com'
      },
    ],
  },
};

export default nextConfig;
