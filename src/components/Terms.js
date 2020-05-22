import React from "react";
import useToggle from "../custom-hooks/useToggle";

const Terms = () => {
  const result = useToggle(false);
  const { isOpen, toggle } = result;
  const classes = isOpen ? "accordion_wrapper open" : "accordion_wrapper";

  return (
    <div className={classes}>
      <button onClick={toggle} className="accordion_header">
        What about distributing these?
      </button>
      {isOpen && (
        <div className="accordion_content">
          No you should not! These are copywrited and should not be shared as
          you wish. You need to seek permission first.
        </div>
      )}
    </div>
  );
};

export default Terms;
