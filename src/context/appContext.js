import React from "react";

const appContext = React.createContext({
  images: {},
  setImages: () => {},
  theme: "light",
  toggleTheme: () => {},
  selectCamera: () => {},
});

export default appContext;
