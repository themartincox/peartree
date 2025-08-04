import { defineType, defineField } from 'sanity'

export const homepageContent = defineType({
  name: 'homepageContent',
  title: 'Homepage Content',
  type: 'document',
  icon: () => '🏠',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Homepage Settings',
      hidden: true,
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Main headline on the homepage',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Supporting headline below the main title',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
      description: 'Detailed description in the hero section',
    }),
    defineField({
      name: 'ctaPrimary',
      title: 'Primary CTA Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Text for the main call-to-action button',
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Secondary CTA Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Text for the secondary call-to-action button',
    }),
    defineField({
      name: 'stats',
      title: 'Statistics Section',
      type: 'object',
      fields: [
        {
          name: 'revenue',
          title: 'Revenue Statistic',
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string', placeholder: '£6.25M' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
        },
        {
          name: 'leads',
          title: 'Leads Statistic',
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string', placeholder: '310%' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
        },
        {
          name: 'time',
          title: 'Time Savings Statistic',
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string', placeholder: '148hrs' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
        },
        {
          name: 'roi',
          title: 'ROI Statistic',
          type: 'object',
          fields: [
            { name: 'value', title: 'Value', type: 'string', placeholder: '442%' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heroTitle',
    },
    prepare(selection) {
      return {
        title: 'Homepage Content',
        subtitle: selection.title,
      }
    },
  },
})
