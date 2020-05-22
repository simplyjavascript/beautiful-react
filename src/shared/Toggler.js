import React, { Component } from "react";

class Toggler extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState((prev) => {
      return {
        isOpen: !prev.isOpen,
      };
    });
  };

  render() {
    const classes = this.state.isOpen
      ? "accordion_wrapper open"
      : "accordion_wrapper";
    const { headerText } = this.props;

    return (
      <div className={classes}>
        <button onClick={this.toggle} className="accordion_header">
          {headerText}
        </button>
        {this.props.render(this.state.isOpen)}
      </div>
    );
  }
}
export default Toggler;
