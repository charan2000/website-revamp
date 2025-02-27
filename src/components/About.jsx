import React, { memo } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

// Animation variants - moved outside to prevent recreation on each render
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

// Common animation props to reduce prop spreading
const commonAnimationProps = {
  viewport: { amount: 0.5, once: false },
};

const STATS = [
  { id: 1, number: "10+", text: "Years of Excellence", delay: 0.3 },
  { id: 2, number: "12+", text: "Projects Completed", delay: 0.35 },
  { id: 3, number: "20+", text: "Mn. Sq. Ft. Delivered", delay: 0.4 },
  { id: 4, number: "25+", text: "Ongoing Projects", delay: 0.45 },
];

// Memoized StatCard component to prevent unnecessary re-renders
const StatCard = memo(({ number, text, delay }) => (
  <motion.div
    variants={fadeInUp}
    initial="initial"
    whileInView="animate"
    exit="exit"
    transition={{ duration: 0.6, delay }}
    {...commonAnimationProps}
  >
    <p className="text-4xl font-medium bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text [-webkit-background-clip:text]">
      {number}
    </p>
    <p className="text-gray-300">{text}</p>
  </motion.div>
));

StatCard.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};

StatCard.displayName = "StatCard";

// Memoized section components to prevent unnecessary re-renders
const AboutHeader = memo(() => (
  <>
    <motion.h1
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      exit="exit"
      transition={{ duration: 0.3, delay: 0.1 }}
      {...commonAnimationProps}
      className="text-2xl sm:text-4xl font-bold mb-2"
    >
      About{" "}
      <span className="underline underline-offset-4 decoration-1 under font-light">
        Our Brand
      </span>
    </motion.h1>

    <motion.p
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      exit="exit"
      transition={{ duration: 0.3, delay: 0.15 }}
      {...commonAnimationProps}
      className="text-gray-500 max-w-80 text-center mb-8"
    >
      Passionate About Properties, Dedicated to Your Vision
    </motion.p>
  </>
));

AboutHeader.displayName = "AboutHeader";

const StatsGrid = memo(() => (
  <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
    {STATS.map(({ id, number, text, delay }) => (
      <StatCard key={id} number={number} text={text} delay={delay} />
    ))}
  </div>
));

StatsGrid.displayName = "StatsGrid";

const About = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
        viewport={{ amount: 0.3, once: false }}
        className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full"
        id="About"
      >
        <AboutHeader />

        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
          <motion.img
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            exit="exit"
            transition={{ duration: 0.4, delay: 0.2 }}
            {...commonAnimationProps}
            src={assets.brandImage}
            alt="Brand representation"
            loading="lazy"
            className="w-full sm:w-1/2 max-w-lg"
          />

          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            exit="exit"
            transition={{ duration: 0.4, delay: 0.25 }}
            {...commonAnimationProps}
            className="flex flex-col items-center md:items-start mt-10 text-gray-300"
          >
            <StatsGrid />

            <motion.p
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              exit="exit"
              transition={{ duration: 0.3, delay: 0.5 }}
              {...commonAnimationProps}
              className="my-10 max-w-lg text-gray-300"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </motion.p>

            <motion.button
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              exit="exit"
              transition={{ duration: 0.3, delay: 0.55 }}
              {...commonAnimationProps}
              className="py-2 px-3 rounded-md transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-800 hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:from-orange-400 hover:to-orange-700"
            >
              Learn more
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default memo(About);
