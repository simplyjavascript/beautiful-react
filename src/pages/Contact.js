import React from "react";
import FAQ from "../components/FAQ";
import Terms from "../components/Terms";
import { motion } from "framer-motion";
import { animationVariants } from "../components/AnimationWrapper";
const Contact = () => {
  return (
    <motion.div
      variants={animationVariants}
      initial="open"
      animate="center"
      exit="closed"
    >
      <FAQ />
      <Terms />
    </motion.div>
  );
};

export default Contact;
