import type { NextConfig } from "next";
require('dotenv').config();

const nextConfig: NextConfig = {
  /* config options here */
  // eslint: {
  //   dirs: ['app', 'components', 'providers', 'stores', 'test', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  // },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
};

export default nextConfig;
