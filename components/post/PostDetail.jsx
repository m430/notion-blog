'use client'

import NotionRenderer from '@/components/notion/NotionRenderer'
import TableOfContents from '@/components/post/TableOfContents'
import cn from 'classnames'
import { useTheme } from 'next-themes'

export default function PostDetail(props) {
  const { blockMap } = props
  const { theme } = useTheme()

  return (
    <div className="self-stretch -mt-4 flex flex-col items-center lg:flex-row lg:items-stretch">
      <div className="flex-1 hidden lg:block" />
      <div className="flex-none w-full max-w-2xl px-4">
        <NotionRenderer recordMap={blockMap} fullPage={false} darkMode={theme == "dark"} />
      </div>
      <div className={cn('order-first lg:order-[unset] w-full lg:w-auto max-w-2xl lg:max-w-[unset] lg:min-w-[160px]', 'flex-1')}>
        <TableOfContents blockMap={blockMap} className="pt-3 sticky" style={{ top: '65px' }} />
      </div>
    </div>
  )
}