/** @type {import('next').NextConfig} */
require("dotenv").config();

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  env: {
		SERVER_URL: process.env.SERVER_URL
	}
})


module.exports = nextConfig
