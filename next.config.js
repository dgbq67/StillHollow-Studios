/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['kprverse.com'],
        formats: ['image/webp', 'image/avif'],
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    experimental: {
        optimizeCss: true,
    },
};

module.exports = nextConfig;