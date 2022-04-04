// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import projects from "./projects";
import team from "./team";
import media from "./media";
import home from "./home";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([home, projects, team, media]),
});
