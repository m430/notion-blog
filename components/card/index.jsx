export default function Card({
  children,
}) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/20 dark:ring-1 dark:ring-inset">
      <div className="px-4 py-5 sm:p-6">{children}</div>
    </div>
  )
}