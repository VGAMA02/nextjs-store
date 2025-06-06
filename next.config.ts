import type { NextConfig } from "next";
import path from "path"; // ✅ usamos 'import' en lugar de 'require'

// Se eliminó: import { hostname } from "os"; // No se usa
// $env:ANALYZE="true"; npm run build                              para correr el bundleAnalyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/sass")],
    prependData: `@import "main.sass"`
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "**"
      }
    ]
  }
};

export default withBundleAnalyzer(nextConfig);  