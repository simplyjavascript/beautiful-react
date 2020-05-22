import PropTypes from "prop-types";
import CameraItem from "./CameraItem";
import AppContext from "../context/appContext";
import { motion } from "framer-motion";
import React, { useContext } from "react";
const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-10%" },
};

const Cameras = () => {
  const appCtx = useContext(AppContext);
  const { cameras, selectCamera } = appCtx;
  return (
    <div className="cameras_wrapper">
      <motion.ul
        variants={variants}
        animate="open"
        initial="closed"
        transition={{ damping: 10 }}
        className="cameras_list"
      >
        {cameras.map((item) => {
          return (
            <CameraItem
              key={item.id}
              handleSelection={selectCamera}
              item={item}
            />
          );
        })}
      </motion.ul>
    </div>
  );
};

export default Cameras;

Cameras.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      imgClass: PropTypes.string.isRequired,
    })
  ),
};
