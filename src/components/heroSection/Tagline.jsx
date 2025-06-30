import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  commonTransition,
} from "../../animations/heroSectionAnimations";
import { heroSectionData } from "../../constants";

const Tagline = memo(() => (
  <motion.p
    variants={fadeInUp}
    initial="initial"
    animate="animate"
    transition={{ ...commonTransition, delay: 0.2 }}
    className="mt-10 text-xl lg:text-2xl text-gray-400 text-center max-w-3xl mb-12 mx-auto"
  >
    {heroSectionData.tagLine}
  </motion.p>
));

Tagline.displayName = "Tagline";

export default Tagline;
