import React from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/layouts/Layout'
import { AniItem, AniWrapper } from '../animations/PageAnimations'
import ProjectHeader from '../components/pageElements/ProjectHeader'
import myImagePath from '../images/bd-1.jpg'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const IndexPage = ({ location, data }) => {
    const homePageImage = data.allSanityProjects.nodes.find(
        (proj) => proj.projectName === 'Fruitdale School Lofts'
    ).coverImage.asset.gatsbyImageData

    return (
        <Layout location={location}>
            <GatsbyImage
                image={homePageImage}
                alt="blog post image"
                className="w-full h-screen "
            />

            {/* <ProjectHeader name="Home" subheader="Denver, CO" bgImage={myImagePath} /> */}
            <h2>
                Clean, minimal, and deeply customisable. London is a theme made
                for people who appreciate simple lines.
            </h2>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
    query HomePageQuery {
        allSanityProjects {
            nodes {
                projectName
                coverImage {
                    asset {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`
