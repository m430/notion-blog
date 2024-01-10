
import { getAllPosts } from "@/api/notion";
import Pagination from "@/components/pagination";
import PostList from "@/components/post/PostList";
import siteMetadata from "@/data/siteMetadata";

export async function generateStaticParams() {
  const posts = await getAllPosts({ includePages: false })
  const totalPages = Math.ceil(posts.length / siteMetadata.pageSize)
  return Array.from({ length: totalPages }, (_, i) => ({ page: (i + 2).toString() }))
}

export default async function Page({ params }) {
  const { page } = params;
  const posts = await getAllPosts({ includePages: false })
  const pageNumber = parseInt(page)
  const totalPages = Math.ceil(posts.length / siteMetadata.pageSize);

  const postsToShow = posts.slice(
    siteMetadata.pageSize * (pageNumber - 1),
    siteMetadata.pageSize * pageNumber
  )

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <PostList posts={postsToShow} />
      <Pagination currentPage={pageNumber} totalPages={totalPages} />
    </div>
  )
}