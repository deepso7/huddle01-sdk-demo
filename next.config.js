const withTM = require("next-transpile-modules")(["@huddle01/huddle01-client"]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
});
