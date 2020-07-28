const fs = require('fs')
const path = require('path')
const RSS = require('rss')
const fm = require('front-matter')

const generateRSS = (posts, siteUrl) => {
  const feed = new RSS({
    title: 'Blog',
    site_url: siteUrl
  })
  posts.map(post => {
    feed.item({
      title: post.title,
      description: post.description,
      url: post.link,
      date: post.date
    })
  })
  return feed.xml({ indent: true })
}

const main = () => {
  const postPaths = fs.readdirSync('./pages/blog')
  const siteUrl = 'https://koalafyhq.com/'

  const getFm = () => {
    return new Promise((resolve, reject) => {
      let datas = []
      let files = []

      postPaths
        .filter(file => path.extname(file) === '.md')
        .map((postPath, index) => {
          try {
            const content = fs.readFileSync(`./pages/blog/${postPath}`, 'utf8')
            const data = fm(content)
            files[index] = {
              filename: postPath
                .split('.')
                .slice(0, -1)
                .join('.')
            }

            datas.push(data)

            datas.forEach((data, index) => {
              Object.assign(data.attributes, files[index])
            })
          } catch (err) {
            reject(err)
          }
        })

      resolve(datas)
    })
  }
  getFm().then(value => {
    const posts = value.map(({ attributes }) => ({
      title: attributes.title,
      description: attributes.description,
      link: siteUrl + 'blog/' + attributes.filename,
      date: attributes.date
    }))
    const postsJSON = JSON.stringify(posts, null, 2)
    const exportPath = 'blog-index.json'
    fs.writeFileSync(exportPath, `${postsJSON}\n`)
    const rssPath = './out/rss.xml'
    const rssXML = generateRSS(posts, siteUrl)
    fs.writeFileSync(rssPath, rssXML)
  })
}

main()
