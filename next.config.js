/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
            {
                protocol: 'http',
                hostname: '**',
            },
        ],
    },
};

const withPWA = require('next-pwa')({
    dest: 'public',
    disable: false,
    register: true,
    skipWaiting: true,
});

module.exports = withPWA(nextConfig);
