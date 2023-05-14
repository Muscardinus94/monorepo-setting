/** @type {import('next').NextConfig} */
// const withTM = require("next-transpile-modules")(["@packages/ui"])

const nextConfig = {
  transpilePackages: ["@packages/ui"]
}

module.exports = nextConfig
