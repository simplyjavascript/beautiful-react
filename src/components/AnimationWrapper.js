import React from "react";
import { motion } from "framer-motion";
const AnimationWrapper = ({ children }) => {
  return <motion.div>{children}</motion.div>;
};

export default AnimationWrapper;

export const animationVariants = {
  open: {
    opacity: 0,
    y: -100,
  },
  center: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: 100,
  },
};

export const homeVariants = {
  open: {
    opacity: 0,
  },
  center: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};
