const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\gatsby-blog\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\gatsby-blog\\src\\pages\\index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("C:\\gatsby-blog\\src\\pages\\page-2.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("C:\\gatsby-blog\\src\\pages\\using-typescript.tsx"))),
  "component---src-templates-blog-list-template-js": hot(preferDefault(require("C:\\gatsby-blog\\src\\templates\\blog-list-template.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("C:\\gatsby-blog\\src\\templates\\tags.js")))
}

