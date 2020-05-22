import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import AppContext from "./context/appContext";

// components
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import NoFound from "./pages/NoFound";
import GalleryItem from "./pages/GalleryItem";
import AnimationWrapper from "./components/AnimationWrapper";
import { AnimatePresence } from "framer-motion";
//import ImageGallery from "./pages/ImageGallery";
//import Contact from "./pages/Contact";
const ImageGallery = lazy(() => import("./pages/ImageGallery"));
const Contact = lazy(() => import("./pages/Contact"));

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iconClass: "fa-film",
      logoText: "Black & White Frames",
      images: {},
    };
  }

  setImages = (item) => {
    this.setState({
      images: item,
    });
  };

  handleTheme = () => {
    this.setState((state, props) => {
      return {
        theme: state.theme === "light" ? "dark" : "light",
      };
    });
  };

  render() {
    const currentTheme =
      this.state.theme === "light"
        ? "header_wrapper appRoot light"
        : "header_wrapper appRoot dark";
    return (
      <AnimationWrapper>
        <div className={currentTheme}>
          <div className="container">
            <BrowserRouter>
              <Logo data={this.state}> Black & White Frames</Logo>
              <AppContext.Provider
                value={{
                  theme: this.state.theme,
                  toggleTheme: this.handleTheme,
                  images: this.state.images,
                  setImages: this.setImages,
                }}
              >
                <Navbar />
                <AnimatePresence>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route
                      path="/gallery/:id"
                      render={() => (
                        <Suspense fallback={<h3> Loading..</h3>}>
                          <GalleryItem />
                        </Suspense>
                      )}
                    />
                    <Route
                      path="/gallery"
                      render={() => (
                        <Suspense fallback={<h3> Loading..</h3>}>
                          <ImageGallery />
                        </Suspense>
                      )}
                    />
                    <Route
                      path="/contacts"
                      render={() => (
                        <Suspense fallback={<h3> Loading..</h3>}>
                          <Contact />
                        </Suspense>
                      )}
                    />
                    <Route component={NoFound} />
                  </Switch>
                </AnimatePresence>
              </AppContext.Provider>
            </BrowserRouter>
          </div>
          <Footer />
        </div>
      </AnimationWrapper>
    );
  }
}
