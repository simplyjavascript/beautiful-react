import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import Loading from "../components/Loading";
import Tooltip from "../shared/Tooltip";
import useFetch from "../custom-hooks/useFetch";
import AppContext from "../context/appContext";
import { motion } from "framer-motion";
import { animationVariants } from "../components/AnimationWrapper";

const ImageGallery = ({ history, match }) => {
  const appCtx = useContext(AppContext);
  const [search, setSearch] = useState("cameras");

  const result = useFetch(search);
  const { loading, state } = result;

  const selectGallery = (item) => {
    appCtx.setImages(item);
    history.push(`${match.path}/${item.id}`);
  };

  return (
    <motion.div
      variants={animationVariants}
      initial="open"
      animate="center"
      exit="closed"
    >
      <div className="gallery_wrapper">
        {loading ? (
          <Loading />
        ) : (
          <>
            <h3 className="main_headings"> Instagram Gallery </h3>
            <div className="button_group">
              <Tooltip
                tooltip="Camera"
                btnClass="fa-camera-retro"
                handleClick={() => setSearch("cameras")}
              />
              <Tooltip
                tooltip="Car"
                btnClass="fa-car"
                handleClick={() => setSearch("cars")}
              />
              <Tooltip
                tooltip="Mobile"
                btnClass="fa-mobile"
                handleClick={() => setSearch("mobiles")}
              />
            </div>
            <div className="cards">
              {state.images[state.current].map((item) => {
                return (
                  <div
                    onClick={() => selectGallery(item)}
                    key={item.id}
                    className="card"
                  >
                    <img className="card_img" src={item.urls.thumb} />
                    <div className="card_desc">
                      <span className="twitter">
                        @{item.user.instagram_username}
                      </span>
                      <span className="twitter_likes">
                        <i className="fa fa-heart"></i> {item.user.total_likes}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default withRouter(ImageGallery);
