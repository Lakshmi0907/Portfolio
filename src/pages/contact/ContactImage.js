import React from "react";
import contactDetailsImage from "../../assets/images/contact_details.avif"; // Update the path

const ContactImg = (props) => {
  return (
    <img
      src={contactDetailsImage} // New image path
      alt="contact details"
      style={{ filter: props.theme.imageFilter }}
    />
  );
};

export default ContactImg;
