import { genPageMetadata } from 'app/seo'
import { getAllPosts } from '@/api/notion'
import TagLayout from '@/layouts/TagLayout'
import siteMetadata from '@/data/siteMetadata'

export const revalidate = 10;

export const metadata = genPageMetadata({
  title: 'Tags'
})

export async function generateStaticParams() {
  const posts = await getAllPosts({ includePages: false })
  const totalPages = Math.ceil(posts.length / siteMetadata.pageSize)
  return Array.from({ length: totalPages }, (_, i) => ({ page: (i + 2).toString() }))
}

export default async function Page({ params }) {
  const { page } = params;

  return <TagLayout page={page} />;
}
