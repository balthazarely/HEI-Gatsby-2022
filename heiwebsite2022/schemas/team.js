import { BiFace } from "react-icons/bi";

export default {
  name: "team",
  title: "Team",
  type: "document",
  icon: BiFace,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "profile",
      title: "Profile",
      type: "text",
      description: "Tell me about yourself...",
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
    },
  ],
};
