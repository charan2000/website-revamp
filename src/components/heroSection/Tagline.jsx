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
    className="mt-8 text-xl sm:text-2xl text-slate-300 text-center max-w-4xl mb-12 mx-auto leading-relaxed"
  >
    Transforming real estate aspirations into tangible success through
    <span className="text-emerald-400 font-semibold"> expert-led strategies </span>
    and
    <span className="text-blue-400 font-semibold"> comprehensive solutions</span>
  </motion.p>
));

Tagline.displayName = "Tagline";

export default Tagline;
