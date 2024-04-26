/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'i.postimg.cc',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'th.bing.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
