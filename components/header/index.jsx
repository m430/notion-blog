'use client'

import siteMetadata from '@/data/siteMetadata'
import { useCallback, useEffect, useRef } from 'react'
import Link from '../Link'
import Logo from '../logo'
import NavBar from '../navbar'
import "./index.css"

const Header = () => {

  const navRef = useRef();
  const sentinelRef = useRef();

  const handler = useCallback(([entry]) => {
    if (navRef.current) {
      navRef.current?.classList.toggle("sticky-nav-full", !entry.isIntersecting);
    } else {
      navRef.current?.classList.add("remove-sticky");
    }
  })

  useEffect(() => {
    const sentinelEl = sentinelRef.current;
    const observer = new window.IntersectionObserver(handler);
    observer.observe(sentinelEl);

    return () => {
      sentinelEl && observer.unobserve(sentinelEl);
    }
  });

  return (
    <>
      <div className='observer-element h-4 md:h-12' ref={sentinelRef}></div>
      <header
        id='sticky-nav'
        ref={navRef}
        className="sticky-nav group m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 max-w-3xl px-4"
      >
        <Link href="/" aria-label={siteMetadata.title}>
          <div className="flex items-center">
            <Logo />
            <div className="hidden ml-2 h-6 text-xl font-semibold sm:block">
              {siteMetadata.title}
            </div>
          </div>
        </Link>
        <NavBar />
      </header>
    </>
  )
}

export default Header
