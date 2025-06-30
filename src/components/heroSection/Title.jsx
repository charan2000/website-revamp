import React, { memo } from "react";
import { motion } from "framer-motion";
import GradientText from "./GradientText";
import {
  fadeInUp,
  commonTransition,
} from "../../animations/heroSectionAnimations";

const Title = memo(() => (
  <motion.h1
    variants={fadeInUp}
    initial="initial"
    animate="animate"
    transition={{ ...commonTransition, delay: 0.1 }}
    className="text-center text-5xl sm:text-6xl md:text-[82px] inline-block max-w-4xl font-medium pt-20 text-white"
  >
    Best In-Class
    <GradientText text="Wealth" />
    Advisors
  </motion.h1>
));

Title.displayName = "Title";

export default Title;
