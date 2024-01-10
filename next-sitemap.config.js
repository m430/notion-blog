const siteMetadata = require("./data/siteMetadata");

module.exports = {
  siteUrl: siteMetadata.siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  generateIndexSitemap: false
  // ...other options
  // https://github.com/iamvishnusankar/next-sitemap#configuration-options
}
