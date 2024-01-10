const BLOG = {
  title: "Andy's Blog",
  author: 'Andy Zheng',
  email: 'minzheng509@gmail.com',
  link: 'https://andyzheng.cc',
  lang: 'zh-CN', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Asia/Shanghai', // Your Notion posts' date will be interpreted as this timezone. See https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for all options.
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#18181B', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2023, // If leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: false,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: 'https://og-image-craigary.vercel.app', // The link to generate OG image, don't end with a slash
  socialLink: 'https://twitter.com/xidianxiaozi',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  comment: {
    // support provider: giscus
    provider: 'giscus', // leave it empty if you don't need any comment plugin
    giscusConfig: {
      repo: "m430/notion-blog",
      repoId: "R_kgDOK-aGbg",
      category: "Announcements",
      categoryId: "DIC_kwDOK-aGbs4CcJ_M",
      mapping: "pathname",
      strict: "0",
      term: "Welcome to @giscus/react component!",
      reactionsEnabled: "1",
      emitMetadata: "0",
      inputPosition: "top",
      theme: "preferred_color_scheme",
      lang: "zh-CN",
      loading: "lazy"
    },
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
