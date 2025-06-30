import React, { memo, useState, useEffect } from "react";
import PropTypes, { number } from "prop-types";
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
  { id: 1, number: "15+", text: "Years of Excellence", delay: 0.3 },
  { id: 3, number: "750+", text: "Happy Investers", delay: 0.4 },
  { id: 2, number: "53+", text: "Diversified Projects", delay: 0.35 },
  { id: 4, number: "21+", text: "On going Projects", delay: 0.45 },
  { id: 5, number: "110+", text: "Countries Investors Follow Us", delay: 0.5 },
  { id: 6, number: "3.81+", text: "Crore Digital Impressions", delay: 0.55 },
];

// Add this custom hook at the top level of your file
const useCountAnimation = (endValue, duration = 2000, delay = 0) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const startValue = 0;
    const endNum = parseFloat(endValue.replace("+", ""));

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (progress < duration) {
        const current = easeOutQuad(progress, startValue, endNum, duration);
        setCount(current);
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endNum);
      }
    };

    const startAnimation = () => {
      if (!hasAnimated) {
        setHasAnimated(true);
        setTimeout(() => {
          animationFrame = requestAnimationFrame(animate);
        }, delay * 1000);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`stat-${endValue}`);
    if (element) observer.observe(element);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [endValue, duration, delay, hasAnimated]);

  return count;
};

// Add this easing function
const easeOutQuad = (t, b, c, d) => {
  t /= d;
  return -c * t * (t - 2) + b;
};

// Memoized StatCard component to prevent unnecessary re-renders
const StatCard = memo(({ number, text, delay }) => {
  const animatedValue = useCountAnimation(number, 2000, delay);

  return (
    <motion.div
      id={`stat-${number}`}
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      exit="exit"
      transition={{ duration: 0.6, delay }}
      {...commonAnimationProps}
    >
      <p className="text-4xl font-medium bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text [-webkit-background-clip:text]">
        {Math.round(animatedValue)}
        {number.includes("+") ? "+" : ""}
      </p>
      <p className="text-gray-300">{text}</p>
    </motion.div>
  );
});

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
      className="text-2xl sm:text-4xl font-light mb-2"
    >
      About{" "}
      <span className="underline underline-offset-4 decoration-1 under font-semibold">
        Keerthi Realtors
      </span>
    </motion.h1>

    <motion.p
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      exit="exit"
      transition={{ duration: 0.3, delay: 0.15 }}
      {...commonAnimationProps}
      className="text-gray-400 max-w-100 text-md text-center mb-8"
    >
      Advisors for Creating Wealth in Real Estate
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
            src={assets.assetManagement3}
            className="w-full sm:w-[300px] md:w-[380px] h-auto object-cover rounded-2xl shadow-2xl 
               hover:scale-[1.02] transition-transform duration-300 md:self-stretch"
            alt="Asset Management"
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
              Keerthi Realtors is a well Recognised Asset Management firm in
              Andhra Pradesh, We are a team of professionals with a vision to
              provide expert solutions to our clients. We are known for our
              expertise in Asset Management services in real estate segment &
              our commitment to providing the best services to our clients.
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
