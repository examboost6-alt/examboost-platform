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
};

export default nextConfig;
