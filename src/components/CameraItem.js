import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const listVariants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const CameraItem = (props) => {
  const { item } = props;
  const classes = `camera_pic ${item.imgClass}`;
  return (
    <motion.li
      variants={listVariants}
      animate="open"
      initial="closed"
      exit="closed"
      transition={{ damping: 300 }}
      className="camera_item"
      onClick={() => props.handleSelection(item)}
      key={item.id}
    >
      <div className="camera_card">
        <div className={classes}></div>
        <div className="camera_content">
          <div className="camera_title">Model: {item.name}</div>
          <p className="camera_text">
            Rating: {item.rating} / Price {item.price}$
          </p>
        </div>
      </div>
    </motion.li>
  );
};

export default CameraItem;
