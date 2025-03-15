/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/Bandit2040", // 👈 เปลี่ยนเป็นชื่อ Repo ของคุณ
    assetPrefix: "/Bandit2040/",
    images: {
      unoptimized: true, // ปิด Image Optimization
    },
  };
  
  export default nextConfig;