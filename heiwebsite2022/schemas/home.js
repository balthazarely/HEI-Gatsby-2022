import { BiHomeAlt } from "react-icons/bi";

export default {
  name: "home",
  title: "Home",
  type: "document",
  icon: BiHomeAlt,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "heroImage",
      title: "Hero Immage",
      type: "image",
    },
    {
      name: "logo",
      title: "logo",
      type: "image",
    },
    {
      name: "imagesGallery",
      title: "Image gallery",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
