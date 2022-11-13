const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
// const domain = process.env.PRODUCTION_DOMAIN;
const domain = "https://micro-frontend-marketing.netlify.app";
const authDomain = "https://micro-frontend-auth.netlify.app";

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        // marketing: `marketing@${domain}/remoteEntry.js`,
        // auth: `auth@${authDomain}/remoteEntry.js`,
        marketing: 'marketing@http://localhost:8081/remoteEntry.js',
        auth:'auth@http://localhost:8082/remoteEntry.js'
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
