import dayjs from '@/lib/dayjs';
import { NotionClient } from '@/lib/notion';
import { idToUuid } from 'notion-utils';
import filterPublishedPosts from './filterPublishedPosts';
import getAllPageIds from './getAllPageIds';
import getPageProperties from './getPageProperties';

/**
 * @param {{ includePages: boolean }} - false: posts only / true: include pages
 */
export async function getAllPosts({ includePages = false } = {}) {
  const id = idToUuid(process.env.NOTION_PAGE_ID)

  const response = await NotionClient.getPage(id)

  const collection = Object.values(response.collection)[0]?.value
  const collectionQuery = response.collection_query
  const block = response.block
  const schema = collection?.schema

  const rawMetadata = block[id].value

  // Check Type
  if (
    rawMetadata?.type !== 'collection_view_page' &&
    rawMetadata?.type !== 'collection_view'
  ) {
    console.log(`pageId "${id}" is not a database`)
    return null
  }

  // Construct Data
  const pageIds = getAllPageIds(collectionQuery)
  const data = []
  for (let i = 0; i < pageIds.length; i++) {
    const id = pageIds[i]
    const properties = (await getPageProperties(id, block, schema)) || null

    // Add fullwidth to properties
    properties.fullWidth = block[id].value?.format?.page_full_width ?? false
    // Convert date (with timezone) to unix milliseconds timestamp
    properties.date = (
      properties.date?.start_date
        ? dayjs.tz(properties.date?.start_date)
        : dayjs(block[id].value?.created_time)
    ).valueOf()

    data.push(properties)
  }

  // remove all the the items doesn't meet requirements
  const posts = filterPublishedPosts({ posts: data, includePages })

  // Sort by date
  return posts
}
