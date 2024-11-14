import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern',
        },
      },
    },
  },
};

export default nextConfig;
