import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="mb-2 mt-16 flex items-center justify-center">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>{siteMetadata.author}</div>
        </div>
      </div>
    </footer>
  )
}
