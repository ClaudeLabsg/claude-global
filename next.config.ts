import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/malaysia", destination: "/johor", permanent: true }];
  },
};

export default nextConfig;
