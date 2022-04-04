import React from "react";
import { motion } from "framer-motion";
import { AniImage, AniItem, AniWrapper } from "../../animations/PageAnimations";

const ProjectHeader = ({ name, subheader, bgImage }) => (
  <motion.div
  // variants={AniWrapper}
  >
    <motion.div
      className="flex items-start justify-center w-full overflow-hidden "
      style={{
        height: "400px",
      }}
    >
      <motion.img
        //  variants={AniImage}

        src={bgImage}
      />
    </motion.div>

    <div className="flex flex-col items-start justify-start w-full max-w-4xl gap-2 p-5 mx-auto ">
      <motion.div
        className="text-4xl font-bold text-gray-900 "
        // variants={AniItem}
      >
        {name}
      </motion.div>
      <motion.p
        className="font-bold text-center text-gray-600 text-md "
        // variants={AniItem}
      >
        {subheader}
      </motion.p>
    </div>
  </motion.div>
);

export default ProjectHeader;
