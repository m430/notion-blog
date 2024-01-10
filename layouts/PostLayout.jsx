import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Author from '@/components/author'
import Comments from '@/components/comment'
import Divider from '@/components/divider'
import { TagLink } from '@/components/tag/Tag'
import Time from '@/components/time'

export default function PostLayout({ post, prev, next, children }) {
  const { slug, date, title, tags } = post

  return (
    <main className="flex-grow transition-all">
      <article className='flex flex-col items-center'>
        <header className="w-full font-bold max-w-2xl px-4">
          <PageTitle>{title}</PageTitle>
          <div className="flex items-center mt-7 mb-4 text-sm text-gray-700/70 font-medium leading-5">
            <Author />
            <span className='block'>&nbsp;/&nbsp;</span>
            <Time date={date} />
            <div className="flex flex-wrap ml-2">
              {tags.map((tag) => (
                <TagLink key={tag} text={tag} />
              ))}
            </div>
          </div>
        </header>
        <div className='w-full max-w-2xl pb-4 px-4'>
          <Divider />
        </div>
        {children}
        <footer>
          <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
            {prev && prev.path && (
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${prev.path}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Previous post: ${prev.title}`}
                >
                  &larr; {prev.title}
                </Link>
              </div>
            )}
            {next && next.path && (
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/${next.path}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={`Next post: ${next.title}`}
                >
                  {next.title} &rarr;
                </Link>
              </div>
            )}
          </div>
        </footer>
      </article>
      <div className='mx-auto w-full max-w-2xl pb-4 px-4'>
        <Divider />
      </div>
      <Comments slug={slug} />
      <ScrollTopAndComment />
    </main>
  )
}
