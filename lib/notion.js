import { NotionAPI } from 'notion-client'

const { NOTION_ACCESS_TOKEN } = process.env

export const NotionClient = new NotionAPI({ authToken: NOTION_ACCESS_TOKEN });


