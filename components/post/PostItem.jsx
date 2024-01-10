import Link from "@/components/Link";
import { TagLink } from "@/components/tag/Tag";
import Time from "@/components/time";

export default function PostItem({ post }) {
  const { slug, date, title, summary, tags } = post;
  return (
    <li className="py-12">
      <article>
        <div className="space-y-5 xl:col-span-3">
          <div className="space-y-6">
            <div className="space-y-2">
              <header className="flex justify-between items-baseline">
                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                  <Link
                    href={`/posts/${slug}`}
                    className="text-gray-900 dark:text-gray-100"
                  >
                    {title}
                  </Link>
                </h2>
                <dd className="text-base font-medium leading-6 whitespace-nowrap text-gray-500 dark:text-gray-400">
                  <Time date={date} />
                </dd>
              </header>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <TagLink key={tag} text={tag} />
                ))}
              </div>
            </div>
            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
              {summary}
            </div>
          </div>
        </div>
      </article>
    </li>
  )
}