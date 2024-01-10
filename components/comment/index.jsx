'use client'

import siteMetadata from '@/data/siteMetadata'
import { Comments as CommentsComponent } from 'pliny/comments'

export default function Comments({ slug }) {
  return (
    <div className='px-4 font-medium text-gray-500 dark:text-gray-400 my-5 mx-auto max-w-2xl'>
      {siteMetadata.comments && (
        <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
      )}
    </div>
  )
}
