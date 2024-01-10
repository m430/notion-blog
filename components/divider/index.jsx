import cn from "classnames";

export default function Divider({ className, ...props }) {
  const cls = cn("border-b border-opacity-50 border-gray-200 dark:border-gray-600 dark:border-opacity-50", className);
  return <div className={cls} {...props} />
}