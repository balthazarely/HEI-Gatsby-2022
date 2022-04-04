import React from 'react'
import { motion } from 'framer-motion'
import Layout from '../components/layouts/Layout'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PageWrapper } from '../components/pageElements/PageWrapper'

const frameVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
            // ease: [0.43, 0.13, 0.23, 0.96],
        },
    },
}

const sectionLayoutChildAnimation = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            // staggerChildren: 0.2,
            // ease: [0.43, 0.13, 0.23, 0.96],
        },
    },
}

const ProjectPage = ({ data }) => {
    const { allProjects } = data
    const sortedProjects = allProjects.nodes.sort((a, b) =>
        a.order > b.order ? 1 : -1
    )
    return (
        <Layout>
            <PageWrapper>
                <motion.div
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
                    variants={frameVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {sortedProjects.map((project, idx) => (
                        <motion.div
                            variants={sectionLayoutChildAnimation}
                            key={idx}
                            className="flex flex-col w-full mb-4 "
                        >
                            <Link to={project.slug.current}>
                                <GatsbyImage
                                    image={
                                        project.coverImage.asset.gatsbyImageData
                                    }
                                    alt="blog post image"
                                    className="object-cover w-full h-96 sm:h-72 md:h-56"
                                />
                            </Link>
                            <div className="mt-2 text-sm ">
                                {project.projectName}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </PageWrapper>
        </Layout>
    )
}

export default ProjectPage

export const query = graphql`
    query MyQuery {
        allProjects: allSanityProjects {
            nodes {
                projectName
                slug {
                    current
                }
                coverImage {
                    asset {
                        gatsbyImageData
                    }
                }
                order
            }
        }
    }
`
