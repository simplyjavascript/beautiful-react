import React from "react";

const Logo = (props) => {
  const { iconClass } = props.data;
  const classes = `fa ${iconClass} fa-3x`;
  return (
    <>
      <div className="header_logo">
        <i className={classes}></i>
        <span className="logo_text"> {props.children} </span>
      </div>
      <div className="divider div-transparent div-dot"></div>
    </>
  );
};

export default Logo;
