import React, { useState } from "react";
import Quotes from "../components/Quotes";
import SearchBar from "../components/SearchBar";
import AppContext from "../context/appContext";
import Cameras from "../components/Cameras";
import cameraDetails from "../components/camera-details";
import { animationVariants } from "../components/AnimationWrapper";
import { motion } from "framer-motion";
const Home = () => {
  const [cameras, setCameras] = useState(cameraDetails);
  const [selectedCamera, setSelectedCamera] = useState(null);
  const [filter, setFilter] = useState("");

  const filteredCameras = cameras.filter((c) =>
    c.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Quotes />
      {selectedCamera && (
        <div className="selected_camera_wrapper">
          <span> {selectedCamera.name} </span> /
          <span> {selectedCamera.price} </span>
        </div>
      )}
      <motion.div
        variants={animationVariants}
        initial="open"
        animate="center"
        exit="closed"
      >
        <SearchBar onSearch={(val) => setFilter(val)} />
        <AppContext.Provider
          value={{
            cameras: filteredCameras,
            selectCamera: (item) => setSelectedCamera(item),
          }}
        >
          <h3 className="main_headings"> Popular Cameras</h3>
          <Cameras />
        </AppContext.Provider>
      </motion.div>
    </>
  );
};

export default Home;
