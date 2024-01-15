import { genPageMetadata } from 'app/seo'
import { getAllPosts, getAllTagsFromPosts } from "@/api/notion"
import { slug } from "github-slugger"
import siteMetadata from '@/data/siteMetadata'
import TagLayout from '@/layouts/TagLayout'

export const revalidate = 10;

export const metadata = genPageMetadata({
  title: 'Blog'
})

export const generateStaticParams = async () => {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts);
  const tagKeys = Object.keys(tags);

  const paths = []
  for (const key of tagKeys) {
    const pages = Math.ceil(tags[key] / siteMetadata.pageSize);
    for (let page = 2; page <= pages.length; page++) {
      paths.push({ tag: encodeURI(slug(key)), page: page.toString() });
    }
  }
  return paths;
}

export default async function Page({ params }) {
  const { tag, page } = params;

  return <TagLayout tag={tag} page={page} />;
}
