import { BiBuildingHouse } from "react-icons/bi";

export default {
  name: "projects",
  title: "Projects",
  type: "document",
  icon: BiBuildingHouse,
  fields: [
    {
      name: "logo",
      title: "logo",
      type: "image",
    },
    {
      name: "projectName",
      title: "Project Name",
      type: "string",
      description: "Name of the Project",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "projectName",
        maxLength: 200,
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-"),
      },
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      description: "Description of the Project",
    },
    {
      name: "year",
      title: "Year",
      type: "string",
      description: "Year of the Project",
    },
    {
      name: "category",
      title: "Project Category",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Redevelopment", value: "redevelopment" },
          { title: "Renewable Energy", value: "renewable-energy" },
          { title: "Affordable Housing", value: "affordable-housing" },
          { title: "Consulting", value: "consulting" },
        ],
      },
    },
    {
      name: "headlineText",
      title: "Headline",
      type: "string",
      description: "Main headline text",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Description of the Project",
    },
    {
      name: "awards",
      title: "Awards",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "links",
      title: "External Links",
      type: "array",
      of: [{ type: "string", type: "url" }],
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imagesGallery",
      title: "Image gallery",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
