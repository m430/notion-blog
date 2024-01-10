import PostItem from "./PostItem"

export default function PostList({ posts }) {
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {posts.map((post) => (<PostItem key={post.slug} post={post} />))}
    </ul>
  )
}