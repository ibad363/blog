import { defineType, defineField } from "sanity";

export default defineType({
  name: "blog",
  title: "Blog",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().max(100), // Max 100 characters
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.required().max(170), // Max 170 characters
    }),
    defineField({
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true, // Enable hotspot for cropping
      },
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) =>
        Rule.max(3).error("You can only add up to 3 tags."), // Max 3 tags
    }),
    defineField({
      name: "authorName",
      title: "Author Name",
      type: "string",
    }),
    defineField({
      name: "uploadDate",
      title: "Upload Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Web Development", value: "web-dev" },
          { title: "App Development", value: "app-dev" },
          { title: "Artificial Intelligence", value: "ai" },
        ],
      },
      validation: (Rule) => Rule.required(), // Category is required
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [
        { type: "block" }, // Text paragraphs
        {
          type: "image", // Images within description
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "comments",
      title: "Comments",
      type: "array",
      of: [
        defineField({
          name: "commentObject",
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "email",
              title: "Email",
              type: "string",
            }),
            defineField({
              name: "comment",
              title: "Comment",
              type: "text",
              validation: (Rule) => Rule.max(500),
            }),
            defineField({
              name: "date",
              title: "Comment Date",
              type: "datetime",
              initialValue: () => new Date().toISOString(), // Automatically set date
            }),
            defineField({
                name: "blog",
                title: "Blog Reference",
                type: "reference",
                to: [{ type: "blog" }], // Link to the blog
            }),
          ],
        }),
      ],
    }),
  ],
});
