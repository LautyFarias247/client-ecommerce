/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
	env: {
		API_URL: 'http://localhost:3001'
	}
}

module.exports = nextConfig
