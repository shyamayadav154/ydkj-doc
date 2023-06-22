/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.VERCEL_URL || 'https://ydkj-doc.vercel.app/',
  generateRobotsTxt: true, // (optional)
}
