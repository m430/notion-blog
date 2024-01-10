import { slug } from 'github-slugger'
import Link from '@/components/Link'
import cn from "classnames"

const TagNavItem = ({ tag, count, active }) => {

  return (
    <li>
      <Link
        href={`/tags/${slug(tag)}`}
        className={cn(
          active ? 'bg-gray-50 text-primary-600' : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50',
          'group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold'
        )}
      >
        {tag == "all" ? "全部" : tag}
        <span
          className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
          aria-hidden="true"
        >
          {count}
        </span>
      </Link>
    </li>
  )
}

export default function TagNav({ tags, activeTag, total }) {
  const tagKeys = Object.keys(tags);

  const isTagActive = (tag) => {
    return slug(activeTag) === slug(tag)
  }

  return (
    <nav className="flex flex-1 flex-col" aria-label="Sidebar">
      <ul role="list" className="-mx-2 space-y-1">
        <TagNavItem tag="all" count={total} active={isTagActive("all")} />
        {tagKeys.map((t) => <TagNavItem key={t} tag={t} count={tags[t]} active={isTagActive(t)} />)}
      </ul>
    </nav>
  )
}