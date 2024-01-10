'use client'

import Toggle from '@/components/notion/blocks/Toggle'
import siteMetadata from '@/data/siteMetadata'
import dynamic from 'next/dynamic'
import { getTextContent } from 'notion-utils'
import { createElement as h } from 'react'
import { NotionRenderer as Renderer } from 'react-notion-x'

// Lazy-load some heavy components & override the renderers of some block types
const components = {
  // Code block
  Code: dynamic(async () => {
    return function CodeSwitch(props) {
      switch (getTextContent(props.block.properties.language)) {
        case 'Mermaid':
          return h(
            dynamic(() => {
              return import('@/components/notion/blocks/Mermaid').then(module => module.default)
            }, { ssr: false }),
            props
          )
        default:
          return h(
            dynamic(() => {
              return import('react-notion-x/build/third-party/code').then(async module => {
                // Additional prismjs syntax
                await Promise.all([
                  import('prismjs/components/prism-markup-templating'),
                  import('prismjs/components/prism-markup'),
                  import('prismjs/components/prism-bash'),
                  import('prismjs/components/prism-c'),
                  import('prismjs/components/prism-cpp'),
                  import('prismjs/components/prism-csharp'),
                  import('prismjs/components/prism-docker'),
                  import('prismjs/components/prism-java'),
                  import('prismjs/components/prism-js-templates'),
                  import('prismjs/components/prism-coffeescript'),
                  import('prismjs/components/prism-diff'),
                  import('prismjs/components/prism-git'),
                  import('prismjs/components/prism-go'),
                  import('prismjs/components/prism-graphql'),
                  import('prismjs/components/prism-handlebars'),
                  import('prismjs/components/prism-less'),
                  import('prismjs/components/prism-makefile'),
                  import('prismjs/components/prism-markdown'),
                  import('prismjs/components/prism-objectivec'),
                  import('prismjs/components/prism-ocaml'),
                  import('prismjs/components/prism-python'),
                  import('prismjs/components/prism-reason'),
                  import('prismjs/components/prism-rust'),
                  import('prismjs/components/prism-sass'),
                  import('prismjs/components/prism-scss'),
                  import('prismjs/components/prism-solidity'),
                  import('prismjs/components/prism-sql'),
                  import('prismjs/components/prism-stylus'),
                  import('prismjs/components/prism-swift'),
                  import('prismjs/components/prism-wasm'),
                  import('prismjs/components/prism-yaml')
                ])
                return module.Code
              })
            }),
            props
          )
      }
    }
  }),
  // Database block
  Collection: dynamic(() => {
    return import('react-notion-x/build/third-party/collection').then(module => module.Collection)
  }),
  // Equation block & inline variant
  Equation: dynamic(() => {
    return import('react-notion-x/build/third-party/equation').then(module => module.Equation)
  }),
  // PDF (Embed block)
  Pdf: dynamic(() => {
    return import('react-notion-x/build/third-party/pdf').then(module => module.Pdf)
  }, { ssr: false }),
  // Tweet block
  Tweet: dynamic(() => {
    return import('react-tweet-embed').then(module => {
      const { default: TweetEmbed } = module
      return function Tweet({ id }) {
        return <TweetEmbed tweetId={id} options={{ theme: 'dark' }} />
      }
    })
  }),

  toggle_nobelium: ({ block, children }) => (
    <Toggle block={block}>{children}</Toggle>
  )
}

export default function NotionRenderer(props) {
  const mapPageUrl = slug => `${siteMetadata.siteUrl}/posts/${slug}`

  // Mark block types to be custom rendered by appending a suffix
  if (props.recordMap) {
    for (const { value: block } of Object.values(props.recordMap.block)) {
      switch (block?.type) {
        case 'toggle':
          block.type += '_nobelium'
          break
      }
    }
  }

  return (
    <Renderer
      components={components}
      mapPageUrl={mapPageUrl}
      {...props}
    />
  )
}
