import { getAllPosts, getPostBlocks } from '@/api/notion';
import PostDetail from '@/components/post/PostDetail';
import siteMetadata from '@/data/siteMetadata';
import Layout from '@/layouts/PostLayout';

export async function generateStaticParams() {
  const posts = await getAllPosts({ includePages: true });
  return posts.map(item => `${siteMetadata.siteUrl}/posts/${item.slug}`);
}

async function getPost(slug) {
  const posts = await getAllPosts()
  const post = posts.find(t => t.slug === slug)
  const blockMap = await getPostBlocks(post.id)
  return { post, blockMap }
}

export default async function PostPage({ params }) {
  const { slug } = params;
  const { post, blockMap } = await getPost(slug);

  return (
    <Layout post={post}>
      <PostDetail
        post={post}
        blockMap={blockMap}
      />
    </Layout>
  )
}