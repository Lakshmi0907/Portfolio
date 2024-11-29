import React, { Component } from "react";
import experience from "../../assets/images/experience_image.webp";

export default class ExperienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src={experience} // New image path
        alt="experience details"
        style={{
          Width: "500.79px", // Correct usage of maxWidth
          maxHeight: "450.8px", // Correct usage of maxHeight
          filter: theme.imageFilter, // Applying the image filter from the theme
        }}
      />
    );
  }
}
