import { BiNews } from "react-icons/bi";

export default {
  name: "media",
  title: "Media",
  type: "document",
  icon: BiNews,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "description",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      description: "link",
    },
  ],
};
