/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com',
                protocol: 'https',
                pathname: '/photo-:id',
            },
        ],
    }
};

module.exports = nextConfig;
