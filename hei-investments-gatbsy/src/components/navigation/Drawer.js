import React from "react";
import { GlobalContext } from "../../context/Context";
import { motion } from "framer-motion";
import { Link } from "gatsby";

const variants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
      staggerChildren: 0.01,
      staggerDirection: -1,
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      delayChildren: 0.05,
      staggerChildren: 0.03,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: "-30px",
  },
  show: { opacity: 1, y: "0px" },
};

export const Drawer = ({ navLinks }) => {
  const { toggleMenu, menuOpen } = React.useContext(GlobalContext);

  return (
    <motion.ul
      animate={menuOpen ? "show" : "hidden"}
      variants={variants}
      className="z-0 mx-6"
    >
      {navLinks.map((link) => (
        <motion.div
          className="mb-4 text-2xl "
          variants={item}
          onClick={() => toggleMenu()}
        >
          <Link
            to={link.link}
            activeClassName="active--nav--mobile"
            className="opacity-50 duration-200 hover:opacity-100"
          >
            {link.name}
          </Link>
        </motion.div>
      ))}
    </motion.ul>
  );
};
