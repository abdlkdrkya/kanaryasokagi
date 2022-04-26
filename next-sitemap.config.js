module.exports = {
  siteUrl: "http://kanaryasokagi.com",
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'],
  sitemapSize: 7000,
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://kanaryasokagi.com/server-sitemap.xml", // <==== Add here
    ],
    // optional
  },
};
