import React from "react";
import useToggle from "../custom-hooks/useToggle";
import { AnimatePresence, motion } from "framer-motion";
const FAQ = () => {
  const result = useToggle(false);
  const { isOpen, toggle } = result;

  return (
    <AnimatePresence>
      <div className="accordion_wrapper">
        <button onClick={toggle} className="accordion_header">
          Can I buy the photos?
        </button>
        {isOpen && (
          <motion.div
            style={{ overflow: "hidden" }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="accordion_content">
              Of course! You can. Drop me a mail and I will be happy to let you
              know the details.
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default FAQ;
