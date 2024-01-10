import Link from '@/components/Link'
import SearchButton from "@/components/search/SearchButton"
import ThemeSwitch from "@/components/theme/ThemeSwitch"
import navs from "@/data/navs"

export default function NavBar() {
  return (
    <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
      {navs
        .filter((link) => link.href !== '/')
        .map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hidden font-medium sm:block"
          >
            {link.title}
          </Link>
        ))}
      <SearchButton />
      <ThemeSwitch />
      {/* <MobileNav /> */}
    </div>
  )
}