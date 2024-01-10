import TagNav from ""
import { getAllPosts, getAllTagsFromPosts } from "@/api/notion"
import Card from '@/components/card'
import Pagination from '@/components/pagination'
import PostList from '@/components/post/PostList'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Blog'
})

export const generateStaticParams = async () => {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts);
  const tagKeys = Object.keys(tags);
  const paths = tagKeys.map((tag) => ({
    tag: encodeURI(tag),
  }));
  return paths;
}

export default async function BlogPage() {
  const posts = await getAllPosts({ includePages: false });
  const tags = getAllTagsFromPosts(posts);

  const pageNumber = 1
  const displayPosts = posts.slice(
    siteMetadata.pageSize * (pageNumber - 1),
    siteMetadata.pageSize * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / siteMetadata.pageSize),
  }

  return (
    <div className="flex gap-10">
      <div className='pt-6'>
        <Card>
          <TagNav tags={tags} total={posts.length} />
        </Card>
      </div>
      <div className="flex-1">
        <PostList posts={displayPosts} />
        {pagination && pagination.totalPages > 1 && (
          <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
        )}
      </div>
    </div>
  )
}
