import siteMetadata from "@/data/siteMetadata";
import { formatDate } from "pliny/utils/formatDate";

export default function Time({ date }) {
  return <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
}