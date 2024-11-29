import React, { Component } from "react";
import project from "../../assets/images/project_img.jpg";

export default class ProjectsImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <img
        src={project} // New image path
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
