import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

// Remove logo.png route handler folder so static /logo.png from public/ is used
try {
  const routeFolder = path.join(process.cwd(), "src", "app", "logo.png");
  if (fs.existsSync(routeFolder)) {
    fs.rmSync(routeFolder, { recursive: true, force: true });
  }
} catch {
  // Ignore
}

// Ensure app_logo has .avif extension in public folder if only app_logo exists
try {
  const publicDir = path.join(process.cwd(), "public");
  const rawLogo = path.join(publicDir, "app_logo");
  const avifLogo = path.join(publicDir, "logo.png");
  if (fs.existsSync(rawLogo) && !fs.existsSync(avifLogo)) {
    fs.copyFileSync(rawLogo, avifLogo);
  }
} catch {
  // Ignore
}

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: process.env.NEXT_PUBLIC_APP_LOGO || "/logo.png",
      },
      {
        source: "/app_logo",
        destination: "/logo.png",
      },
    ];
  },
};

export default nextConfig;
