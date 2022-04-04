import React from "react";
import { motion } from "framer-motion";
import Layout from "../components/layouts/Layout";
import { AniItem, AniWrapper } from "../animations/PageAnimations";
import ProjectHeader from "../components/pageElements/ProjectHeader";
import myImagePath from "../images/bd-2.jpg";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { PageWrapper } from "../components/pageElements/PageWrapper";

const About = ({ data }) => {
  const { ourTeam } = data;
  console.log(ourTeam);

  return (
    <Layout>
      <ProjectHeader
        name="About"
        subheader="Historic living at it's best"
        bgImage={myImagePath}
      />
      <PageWrapper>
        <div className="grid grid-cols-4 gap-4">
          {ourTeam.nodes.map((member, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center flex-col border border-red-500"
            >
              <GatsbyImage
                image={member.photo.asset.gatsbyImageData}
                alt="blog post image"
                className="w-48 h-48 border border-red-500"
              />
              {member.name}
            </div>
          ))}
        </div>
      </PageWrapper>
    </Layout>
  );
};

export default About;

export const query = graphql`
  query teamQuery {
    ourTeam: allSanityTeam {
      nodes {
        name
        photo {
          asset {
            gatsbyImageData
          }
        }
        profile
      }
    }
  }
`;
