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
    className="text-center text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-slate-100 via-emerald-400 to-blue-400 bg-clip-text text-transparent leading-tight pt-20 max-w-4xl"
  >
    Best In-Class
    <span className="block">
      <GradientText text="Wealth" />
    </span>
    Advisors
  </motion.h1>
));

Title.displayName = "Title";

export default Title;
