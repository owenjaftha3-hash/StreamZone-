/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'media.tenor.com', 'i.imgur.com', 'cdn.pixabay.com', 'supabase.co'],
  },
};

module.exports = nextConfig;
