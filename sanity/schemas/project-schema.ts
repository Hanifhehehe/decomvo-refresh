import type { Rule } from '@sanity/types'

const article = {
  name: 'article',
  title: 'Articles',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },

    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Projekte', value: 'projekte' },
          { title: 'Beiträge', value: 'beiträge' }
        ],
        layout: 'radio'
      },
      validation: (Rule: Rule) => Rule.required()
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: Rule) => Rule.required()
    },

    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string'
        }
      ]
    },

    {
      name: 'url',
      title: 'URL',
      type: 'url'
    },

    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },

        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            },

            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            }
          ]
        }
      ]
    },

    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime'
    }
  ]
}

export default article
