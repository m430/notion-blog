export default function PageTitle({ children }) {
  return (
    <h1 className="w-full font-bold text-3xl text-gray-900 dark:text-white max-w-2xl">
      {children}
    </h1>
  )
}
