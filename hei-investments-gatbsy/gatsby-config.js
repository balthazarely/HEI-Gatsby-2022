module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "hei-investments-gatbsy",
  },
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "pzxwtwc2",
        dataset: "production",
        watch: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
