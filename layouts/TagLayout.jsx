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
  const pagination = {
    currentPage: pageIndex,
    totalPages: Math.ceil(tagTotal / siteMetadata.pageSize),
  }

  return (
    <div className="flex gap-10">
      <div className='pt-6'>
        <Card>
          <TagNav tags={tags} activeTag={tag} total={total} />
        </Card>
      </div>
      <div className="flex-1">
        <PostList posts={displayPosts} />
        {pagination && pagination.totalPages > 1 && (
          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            basePath={tag == "all" ? `/tags/` : `/tags/${tag}/`}
          />
        )}
      </div>
    </div>
  )
}
