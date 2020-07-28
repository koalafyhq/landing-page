const withMDX = require('./lib/mdx-loader')({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [require('@mapbox/rehype-prism')]
  }
})

module.exports = withMDX({
  pageExtensions: ['md', 'mdx', 'jsx', 'js'],
  webpack: config => {
    return Object.assign({}, config, {
      node: {
        fs: 'empty'
      }
    })
  }
})
