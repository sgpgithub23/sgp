/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pbs.twimg.com', 'www.sgpsolucoes.com.br'],
  },
  env: {
    NEXT_PUBLIC_GET_INFOS_SGP_CONTATO: process.env.NEXT_PUBLIC_GET_INFOS_SGP_CONTATO,
    NEXT_PUBLIC_TOKEN: process.env.NEXT_PUBLIC_TOKEN,
    NEXT_PUBLIC_URL_SMTP_LOCAWEB: process.env.NEXT_PUBLIC_URL_SMTP_LOCAWEB,
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
