import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layouts/Layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PageWrapper } from '../components/pageElements/PageWrapper'

const Project = ({ data }) => {
    const { project } = data
    console.log(project)

    const [lightbox, setLightbox] = useState(false)
    const [lightboxImg, setLightboxImg] = useState([])
    const [selectedImage, setSelectedImage] = useState(0)

    const createLightbox = () => {
        setLightbox(true)
        setLightboxImg(project.imagesGallery)
    }

    const next = (e) => {
        e.preventDefault()
        if (selectedImage < lightboxImg.length - 1) {
            setSelectedImage(selectedImage + 1)
        }
    }

    const prev = (e) => {
        e.preventDefault()
        if (selectedImage > 0) {
            setSelectedImage(selectedImage - 1)
        }
    }

    return (
        <Layout>
            <div className="flex flex-col items-center justify-center w-full ">
                <GatsbyImage
                    image={project.coverImage.asset.gatsbyImageData}
                    alt="blog post image"
                    className="w-full border border-red-500 h-96"
                />
                <PageWrapper>
                    <div className="mt-6 text-4xl">{project.projectName}</div>
                    <div className="mt-6 text-2xl">{project.headlineText}</div>
                    <div className="text-xl ">{project.location}</div>
                    <div className="text-xl ">{project.year}</div>
                    <div className="text-md ">{project.description}</div>
                    <div className="grid grid-cols-3 gap-6 mt-6">
                        {project.imagesGallery.map((image) => (
                            <button onClick={() => createLightbox()}>
                                <GatsbyImage
                                    image={image.asset.gatsbyImageData}
                                    alt="blog post image"
                                    className=""
                                />
                            </button>
                        ))}
                    </div>
                    {lightbox && (
                        <div
                            onClick={() => setLightbox(false)}
                            style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
                            className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-slate-700"
                        >
                            <button
                                onClick={(e) => prev(e)}
                                className="p-3 text-black bg-white"
                            >
                                PREV
                            </button>
                            <GatsbyImage
                                image={
                                    lightboxImg[selectedImage].asset
                                        .gatsbyImageData
                                }
                                alt="blog post image"
                                className=""
                            />
                            <button
                                onClick={(e) => next(e)}
                                className="p-3 text-black bg-white"
                            >
                                NEXT
                            </button>
                        </div>
                    )}
                </PageWrapper>
            </div>
        </Layout>
    )
}

export default Project

export const query = graphql`
    query ($slug: String!) {
        project: sanityProjects(slug: { current: { eq: $slug } }) {
            projectName
            slug {
                current
            }
            category
            coverImage {
                asset {
                    gatsbyImageData
                }
            }
            description
            headlineText
            imagesGallery {
                asset {
                    gatsbyImageData
                }
            }
            links
            location
            logo {
                asset {
                    gatsbyImageData
                }
            }
            year
        }
    }
`
