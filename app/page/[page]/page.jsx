import { notFound } from "next/navigation";
import { getAllPosts } from "@/api/notion";
import Pagination from "@/components/pagination";
import PostList from "@/components/post/PostList";
import siteMetadata from "@/data/siteMetadata";

export const revalidate = 10;

export default async function Page({ params }) {
  const { page } = params;
  const posts = await getAllPosts({ includePages: false })
  const pageNumber = parseInt(page)
  const totalPages = Math.ceil(posts.length / siteMetadata.pageSize);

  if (pageNumber > totalPages) {
    return notFound();
  }

  const postsToShow = posts.slice(
    siteMetadata.pageSize * (pageNumber - 1),
    siteMetadata.pageSize * pageNumber
  )

  return (
    <main className="flex-grow transition-all self-center px-4 w-full max-w-2xl">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <PostList posts={postsToShow} />
        <Pagination currentPage={pageNumber} totalPages={totalPages} />
      </div>
    </main>
  )
}