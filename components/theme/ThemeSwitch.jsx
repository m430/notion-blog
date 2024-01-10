'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (theme === 'dark' || resolvedTheme === 'dark')
        ? <SunIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
        : <MoonIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />}
    </button>
  )
}

export default ThemeSwitch
