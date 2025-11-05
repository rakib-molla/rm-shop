// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all HTTPS image domains
      },
      {
        protocol: "http",
        hostname: "**", // allow all HTTP image domains (optional)
      },
    ],
    // formats: ["image/avif", "image/webp", "image/png", "image/jpeg", "image/gif", "image/svg+xml"],
    dangerouslyAllowSVG: true, // enable SVG support
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;


