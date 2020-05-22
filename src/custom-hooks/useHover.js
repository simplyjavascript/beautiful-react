import React, { useEffect } from "react";

const useHover = (currentHoverFlag) => {
  const [hovering, setHovering] = React.useState(false);
  useEffect(() => {
    setHovering(currentHoverFlag);
  }, [currentHoverFlag]);
  return hovering;
};

export default useHover;
