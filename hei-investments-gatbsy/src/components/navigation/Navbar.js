import React, { useEffect, useState, useContext } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GlobalContext } from '../../context/Context'
import { Drawer } from './Drawer'
import { HamburgerIcon } from '../navigation/Hamburger'
import { motion } from 'framer-motion'
import useScrollPosition from '../../hooks/useScrollPosition'

const Navbar = () => {
    const { allSanityProjects } = useStaticQuery(
        graphql`
            query {
                allSanityProjects {
                    nodes {
                        slug {
                            current
                        }
                        projectName
                        category
                    }
                }
            }
        `
    )

    const scrollPosition = useScrollPosition()
    // console.log(scrollPosition)

    const { menuOpen } = useContext(GlobalContext)

    const navLinks = [
        { link: '/', name: 'Home', side: 'left' },
        { link: '/projects', name: 'Projects', side: 'left' },
        { link: '/about', name: 'About', side: 'left' },
        { link: '/contact', name: 'Contact', side: 'right' },
        { link: '/media', name: 'Media', side: 'right' },
    ]

    return (
        <nav
            className={`navbar fixed  w-full overflow-hidden  bg-white  transition-all duration-300 ${
                menuOpen ? 'h-screen' : 'h-24'
            } 
            `}
        >
            <div
                className={`header-container relative z-40 flex h-24 w-full  items-center  justify-center bg-white  px-6  transition-all duration-300 lg:justify-between `}
            >
                <div className="absolute left-6 lg:hidden">
                    <HamburgerIcon />
                </div>
                <ul className="hidden gap-6 text-sm lg:flex">
                    {navLinks
                        .filter((item) => item.side === 'left')
                        .map((item) => (
                            <li>
                                <Link
                                    to={item.link}
                                    activeClassName="active--nav"
                                    className="duration-200 opacity-50 hover:opacity-100"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                </ul>
                <div className="text-xl logo">Hartman Ely Investments</div>
                <ul className="hidden gap-6 text-sm lg:flex">
                    {navLinks
                        .filter((item) => item.side === 'right')
                        .map((item) => (
                            <li>
                                <Link
                                    to={item.link}
                                    activeClassName="active--nav"
                                    className="duration-200 opacity-50 hover:opacity-100"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
            <Drawer navLinks={navLinks} />
        </nav>
    )
}

export default Navbar
