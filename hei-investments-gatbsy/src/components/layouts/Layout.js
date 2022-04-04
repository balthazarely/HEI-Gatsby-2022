import React, { useContext} from 'react'
import { motion } from 'framer-motion'
import { Link } from 'gatsby'
import Navbar from '../navigation/Navbar'
import { Drawer } from '../navigation/Drawer'
import { GlobalContext } from '../../context/Context'

const duration = 0.4

const variants = {
    initial: {
        opacity: 0,
        // y: 30,
    },
    enter: {
        opacity: 1,
        // y: 0,
        // transition: {
        //   ease: "easeOut",
        //   duration: duration,
        // },
    },
}

const Layout = ({ children, location }) => {
    const { menuOpen } = useContext(GlobalContext)

    return (
        <div
            className={`relative  min-h-screen  ${
                menuOpen && 'h-screen overflow-hidden'
            }`}
        >
            <div className="absolute top-0 z-50 w-full">
                <Navbar />
            </div>

            <motion.main
                className="flex flex-col flex-grow mx-auto"
                variants={variants}
                key={location}
                transition={{ ease: 'backOut', duration: 0.5 }}
                initial="initial"
                animate="enter"
                exit="exit"
            >
                {children}
            </motion.main>
            <h1 className="w-full bg-amber-400">FOOTER IS HERE</h1>
        </div>
    )
}

export default Layout
