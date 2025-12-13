/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', //Tells Next.js to generate a static site (HTML/CSS/JS files)
  distDir: 'build', //The folder to output static files too
};

export default nextConfig;
