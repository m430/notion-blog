import { getAllPosts } from '@/api/notion'
import Pagination from '@/components/pagination'
import PostList from '@/components/post/PostList'
import siteMetadata from '@/data/siteMetadata'

export default async function Page() {
  const posts = await getAllPosts({ includePages: false })
  const totalPages = Math.ceil(posts.length / siteMetadata.pageSize);

  const pageNumber = 1
  const postsToShow = posts.slice(
    siteMetadata.pageSize * (pageNumber - 1),
    siteMetadata.pageSize * pageNumber
  )
  return (
    <main className="flex-grow transition-all self-center px-4 w-full max-w-2xl">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <PostList posts={postsToShow} />
        <Pagination currentPage={1} totalPages={totalPages} />
      </div>
    </main>
  )
}
