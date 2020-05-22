import React, { useState, useEffect, useCallback } from "react";

const useToggle = (toggleFlag) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(toggleFlag);
  }, [toggleFlag]);
  return {
    isOpen: isOpen,
    toggle: useCallback(() => setIsOpen((status) => !status)),
  };
};
export default useToggle;
