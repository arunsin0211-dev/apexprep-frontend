/** @type {import('next').NextConfig} */

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080';
  
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',       // any request starting with /api
        destination: `${BACKEND_URL}/:path*`, // forward to backend
      },
    ];
  },
};

export default nextConfig;