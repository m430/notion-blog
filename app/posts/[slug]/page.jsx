import { notFound } from "next/navigation";
import { getAllPosts, getPostBlocks } from '@/api/notion';
import PostDetail from '@/components/post/PostDetail';
import siteMetadata from '@/data/siteMetadata';
import Layout from '@/layouts/PostLayout';

export const revalidate = 10;

export async function generateStaticParams() {
  const posts = await getAllPosts({ includePages: true });
  return posts.map(item => `${siteMetadata.siteUrl}/posts/${item.slug}`);
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const posts = await getAllPosts()
  const post = posts.find(t => t.slug === slug)
  if (!post) {
    return notFound();
  }
  const blockMap = await getPostBlocks(post.id)

  return (
    <Layout post={post}>
      <PostDetail
        post={post}
        blockMap={blockMap}
      />
    </Layout>
  )
}