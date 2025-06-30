import React, { memo } from "react";
import { motion } from "framer-motion";
import { commonTransition } from "../../animations/heroSectionAnimations";
import Title from "./Title";
import Tagline from "./Tagline";

const Content = memo(() => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={commonTransition}
    className="relative flex flex-col items-center mt-10 lg:mt-20"
  >
    <div className="max-w-7xl mx-auto px-6 pt-5">
      <Title />
      <Tagline />
    </div>
  </motion.div>
));

// Content.displayName = "Content";

export default Content;
