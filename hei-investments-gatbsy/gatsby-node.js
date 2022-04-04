const path = require(`path`);
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`);
};
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(`src/templates/Project.js`);
  const result = await graphql(`
    {
      allSanityProjects {
        nodes {
          projectName
          slug {
            current
          }
          id
          category
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  //   console.log(result.data.allSanityProjects);
  result.data.allSanityProjects.nodes.forEach((edge) => {
    createPage({
      path: `projects/${edge.slug.current}`,
      component: projectTemplate,
      context: {
        slug: edge.slug.current,
      },
    });
  });
  const dedupedCategories = dedupeCategories(result.data.allSanityProjects);
  console.log(dedupedCategories);

  dedupedCategories.forEach((category) => {
    reporter.info(`Creating page: category/${category}`);
    createPage({
      path: `blog/category/${category}`,
      component: require.resolve("./src/templates/CategoryPage.js"),
      context: {
        category,
        ids: result.data.allSanityProjects.nodes
          .filter((node) => {
            return node.category.includes(category);
          })
          .map((node) => {
            return node.id;
          }),
      },
    });
  });

  function dedupeCategories(blog) {
    // Get a list of all the categories
    // console.log(blog.nodes);
    const uniqueCategories = new Set();
    blog.nodes.forEach((node) => {
      // console.log(node.category);
      node.category.forEach((category) => {
        uniqueCategories.add(category);
      });
    });

    // console.log(uniqueCategories);
    return Array.from(uniqueCategories);
  }
};
