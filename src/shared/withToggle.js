import React from "react";

const withToggle = (Component) => {
  return class WithToggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
      };
    }
    toggle = () => {
      this.setState((prev) => {
        return {
          isOpen: !prev.isOpen,
        };
      });
    };
    render() {
      const newProps = {
        isOpen: this.state.isOpen,
        toggle: this.toggle,
      };
      return <Component {...newProps} {...this.props} />;
    }
  };
};

export default withToggle;
