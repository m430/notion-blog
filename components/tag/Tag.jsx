import Link from 'next/link'
import { slug } from 'github-slugger'

export default function Tag({
  color = "gray",
  children
}) {

  const colors = {
    gray: "bg-gray-50 text-gray-600 ring-gray-500/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20",
    red: "bg-red-50 text-red-600 ring-red-500/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/20",
    yellow: "bg-yellow-50 text-yellow-600 ring-yellow-500/10 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/20",
    green: "bg-green-50 text-green-600 ring-green-500/10 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/20",
    blue: "bg-blue-50 text-blue-600 ring-blue-500/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/20",
    indigo: "bg-indigo-50 text-indigo-600 ring-indigo-500/10 dark:bg-indigo-400/10 dark:text-indigo-400 dark:ring-indigo-400/20",
    purple: "bg-purple-50 text-purple-600 ring-purple-500/10 dark:bg-purple-400/10 dark:text-purple-400 dark:ring-purple-400/20",
    pink: "bg-pink-50 text-pink-600 ring-pink-500/10 dark:bg-pink-400/10 dark:text-pink-400 dark:ring-pink-400/20",
  }

  return (
    <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${colors[color]}`}>
      {children}
    </span>
  )
}


export const TagLink = ({ text }) => {
  return (
    <Link href={`/tags/${slug(text)}`} className='mr-2'>
      <Tag># {text}</Tag>
    </Link>
  )
}