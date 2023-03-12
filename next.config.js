/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pbs.twimg.com', 'www.sgpsolucoes.com.br'],
  },
  env: {
    NEXT_GET_INFOS_SGP_CONTATO: process.env.NEXT_GET_INFOS_SGP_CONTATO,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://www.sgpsolucoes.com.br/:path*'
      }
    ]
  }

}

module.exports = nextConfig
