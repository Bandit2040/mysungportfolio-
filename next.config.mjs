/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/mysungportfolio",  // 👈 ใส่ชื่อ Repository ของคุณ
    assetPrefix: "/your-repo-name/",
    images: {
      unoptimized: true, // 👈 ปิด Image Optimization เพราะ Next.js ใช้ Static
    },
  };
  
  export default nextConfig;