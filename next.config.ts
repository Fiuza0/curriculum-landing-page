import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 output: 'export', // Ativa a exportação estática
  basePath: '/curriculum-landing-page', // Deve corresponder ao nome do seu repositório
  images: {
    unoptimized: true, // Necessário para exportação estática, desativa a otimização de imagens do Next.js
  },
};

export default nextConfig;
