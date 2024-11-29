import React, { Component } from "react";
import homePageLogo from "../../assets/images/homepage-image.png";
// width="711.1879"
// height="669.68268"

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src={homePageLogo}
        width="711.1879"
        height="669.68268"
        alt="home page"
      />
    );
  }
}

export default FeelingProud;
