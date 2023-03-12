/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pbs.twimg.com', 'www.sgpsolucoes.com.br'],
  },
  env: {
    NEXT_GET_INFOS_SGP_CONTATO: process.env.NEXT_GET_INFOS_SGP_CONTATO,
  }

}

module.exports = nextConfig
