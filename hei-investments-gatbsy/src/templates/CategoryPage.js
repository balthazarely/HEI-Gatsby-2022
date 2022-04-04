import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layouts/Layout'
import { PageWrapper } from '../components/pageElements/PageWrapper'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function CategoryPage({ pageContext, data }) {
    console.log(pageContext)
    console.log(data.allSanityProjects.nodes)

    const sortedProjects = data.allSanityProjects.nodes

    return (
        <Layout>
            <h1>{pageContext.category}</h1>
            <PageWrapper>
                <div className="grid grid-cols-4 gap-4">
                    {sortedProjects.map((project, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center justify-center border border-red-500"
                        >
                            <Link to={project.slug.current}>
                                {/* <GatsbyImage
                                    image={
                                        project.coverImage.asset.gatsbyImageData
                                    }
                                    alt="blog post image"
                                    className="w-48 h-48 border border-red-500"
                                /> */}
                                {project.projectName}
                            </Link>
                        </div>
                    ))}
                </div>
            </PageWrapper>
        </Layout>
    )
}

export const query = graphql`
    query CategoryListQuery($ids: [String]!) {
        allSanityProjects(filter: { id: { in: $ids } }) {
            nodes {
                id
                slug {
                    current
                }
                projectName
            }
        }
    }
`
