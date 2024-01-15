import { genPageMetadata } from 'app/seo'
import TagLayout from '@/layouts/TagLayout'

export const revalidate = 0;

export const metadata = genPageMetadata({
  title: 'Tags'
})

export default async function Page() {
  return (
    <TagLayout />
  )
}
