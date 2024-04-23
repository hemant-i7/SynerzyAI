/** @type {import('next').NextConfig} */
const nextConfig = {};


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    images: {
      domains: ['oaidalleapiprodscus.blob.core.windows.net'],
    },
  };
  