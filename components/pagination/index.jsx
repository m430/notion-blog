'use client';

import Link from '@/components/Link';
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Pagination({ totalPages, currentPage, basePath = "/" }) {
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50 flex items-center" disabled={!prevPage}>
            <ArrowLeftIcon className='w-5 h-5 mr-2' />Prev
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `${basePath}` : `${basePath}page/${currentPage - 1}`}
            rel="prev"
            className="flex items-center"
          >
            <ArrowLeftIcon className='w-5 h-5 mr-2' />Prev
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50 flex items-center" disabled={!nextPage}>
            Next<ArrowRightIcon className='w-5 h-5 ml-2' />
          </button>
        )}
        {nextPage && (
          <Link href={`${basePath}page/${currentPage + 1}`} rel="next" className="flex items-center">
            Next<ArrowRightIcon className='w-5 h-5 ml-2' />
          </Link>
        )}
      </nav>
    </div>
  )
}