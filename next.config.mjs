/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/:path*',
                has: [
                    {
                        type: 'host',
                        value: 'examboost.in',
                    },
                ],
                destination: 'https://www.examboost.in/:path*',
                permanent: true,
            },
        ];
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    experimental: {
        optimizePackageImports: ['lucide-react', 'react-icons', 'framer-motion'],
    },
};

export default nextConfig;
