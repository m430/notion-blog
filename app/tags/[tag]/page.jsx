import { genPageMetadata } from 'app/seo'
import { getAllPosts, getAllTagsFromPosts } from "@/api/notion"
import { slug } from "github-slugger"
import TagLayout from '@/layouts/TagLayout'

export const revalidate = 0;

export const metadata = genPageMetadata({
  title: 'Blog'
})

export const generateStaticParams = async () => {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts);
  const tagKeys = Object.keys(tags);
  const paths = tagKeys.map((tag) => ({
    tag: encodeURI(slug(tag)),
  }));
  return paths;
}

export default async function TagPage({ params }) {
  const { tag } = params;

  return <TagLayout tag={tag} />;
}
