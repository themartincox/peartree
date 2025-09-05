import { defineType, defineField } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  icon: () => '📊',
  fields: [
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          'Manufacturing',
          'Professional Services',
          'E-commerce',
          'Technology',
          'Healthcare',
          'Financial Services',
          'Education',
          'Other',
        ],
      },
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      validation: (Rule) => Rule.required(),
      description: 'What problems did the client face?',
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'text',
      validation: (Rule) => Rule.required(),
      description: 'How did you solve their problems?',
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'object',
      fields: [
        {
          name: 'leadIncrease',
          title: 'Lead Increase',
          type: 'string',
          placeholder: 'e.g. 425%',
        },
        {
          name: 'revenueIncrease',
          title: 'Revenue Increase',
          type: 'string',
          placeholder: 'e.g. £2.3M',
        },
        {
          name: 'timeSaved',
          title: 'Time Saved',
          type: 'string',
          placeholder: 'e.g. 45hrs/week',
        },
        {
          name: 'roi',
          title: 'ROI',
          type: 'string',
          placeholder: 'e.g. 520%',
        },
      ],
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'text',
      validation: (Rule) => Rule.required(),
      description: 'Quote from the client about the results',
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientRole',
      title: 'Client Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
      placeholder: 'e.g. CEO, Marketing Director',
    }),
    defineField({
      name: 'timeline',
      title: 'Project Timeline',
      type: 'string',
      placeholder: 'e.g. 12 months, 6 weeks',
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'AI Automation',
          'Growth Marketing',
          'SEO',
          'Content Strategy',
          'Email Marketing',
          'Social Media',
          'Brand Development',
          'Analytics',
          'CRM Automation',
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured Case Study',
      type: 'boolean',
      initialValue: false,
      description: 'Show on homepage and prominent locations',
    }),
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'industry',
      media: 'image',
    },
  },
  orderings: [
    {
      title: 'Company A-Z',
      name: 'companyAsc',
      by: [{ field: 'company', direction: 'asc' }],
    },
    {
      title: 'Recently Added',
      name: 'recentlyAdded',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
  ],
})
