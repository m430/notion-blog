export function filterByTag({ posts, tag }) {
  if (tag == "all") {
    return posts;
  }
  return posts.filter(post => post.tags.map(t => t.toLowerCase()).includes(tag))
}