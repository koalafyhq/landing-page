import BlogIndex from '~/blog-index'
import { PostList, IndexLayout } from '~/components/Blog'

export default () => (
  <IndexLayout
    title='The views and news of Koalafy'
    description='We publish what we learn; research, discover, and release, regularly. All
      of contents here are licensed under CC BY-SA 4.0. So, enjoy!'
    icon={{
      src: '/static/img/koalafy-hello.png',
      alt: 'Koalafy logo'
    }}
  >
    {BlogIndex.map(blog => (
      <PostList
        key={blog.id}
        title={blog.title}
        excerpt={blog.excerpt}
        href={blog.link}
      />
    ))}
  </IndexLayout>
)
