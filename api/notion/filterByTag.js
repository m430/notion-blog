import { slug } from "github-slugger";

export function filterByTag({ posts, tag }) {
  if (tag == "all") {
    return posts;
  }
  return posts.filter(post => post.tags.map(t => encodeURI(slug(t))).includes(tag))
}