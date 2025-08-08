import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
    STORYBLOK_VERSION: process.env.STORYBLOK_VERSION,
    STORYBLOK_REGION: process.env.STORYBLOK_REGION,
  },
  images: {
    domains: ["a.storyblok.com"],
  },
  /* config options here */
};

export default nextConfig;
