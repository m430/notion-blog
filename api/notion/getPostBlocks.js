import { NotionClient } from '@/lib/notion'

export async function getPostBlocks(id) {
  const pageBlock = await NotionClient.getPage(id)
  return pageBlock
}
