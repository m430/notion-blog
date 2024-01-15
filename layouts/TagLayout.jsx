import { notFound } from "next/navigation";
import { getAllPosts, getAllTagsFromPosts } from "@/api/notion"
import { filterByTag } from '@/api/notion/filterByTag'
import Card from '@/components/card'
import Pagination from '@/components/pagination'
import PostList from '@/components/post/PostList'
import TagNav from '@/components/tag/TagNav'
import siteMetadata from '@/data/siteMetadata'

export default async function TagLayout({
  tag = "all",
  page = 1,
}) {

  const pageIndex = parseInt(page)
  const posts = await getAllPosts({ includePages: false });
  const total = posts.length
  const tags = getAllTagsFromPosts(posts);
  const tagPosts = filterByTag({ posts, tag });
  const tagTotal = tagPosts.length;
  const displayPosts = tagPosts.slice(
    siteMetadata.pageSize * (pageIndex - 1),
    siteMetadata.pageSize * pageIndex
  )
  const totalPages = Math.ceil(tagTotal / siteMetadata.pageSize);

  if (pageIndex > totalPages) {
    return notFound();
  }

  const pagination = {
    currentPage: pageIndex,
    totalPages,
  }

  return (
    <main className="self-stretch flex flex-col items-center lg:flex-row lg:items-stretch">
      <div className="relative lg:order-[unset] w-full lg:w-auto max-w-2xl lg:max-w-[unset] lg:min-w-[160px] flex-1">
        <div className="sticky top-[120px] flex justify-end">
          <div className="w-[190px] mr-6">
            <Card>
              <TagNav tags={tags} activeTag={tag} total={total} />
            </Card>
          </div>
        </div>
      </div>
      <div className="flex-none w-full max-w-2xl px-4">
        <PostList posts={displayPosts} />
        {pagination && pagination.totalPages > 1 && (
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            basePath={tag == "all" ? `/tags/` : `/tags/${tag}/`}
          />
        )}
      </div>
      <div className="flex-1 hidden lg:block"></div>
    </main>
  )
}
