import React from "react";
import "./ContactDetails.css";
import { socialMediaLinks } from "../../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function contactDetails(props) {
  return (
    <div className="contact-media-div">
      {socialMediaLinks.map((media, i) => {
        return (
          <a
            key={i}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class='link-wrapper'>
              <IconWrapper {...media} {...props}>
                <i className={`fab ${media.fontAwesomeIcon}`}></i>
              </IconWrapper>
              <a href={media.link} className="link">{media.link}</a>
            </div>
            {/* <span></span> */}
          </a>
        );
      })}
    </div>
  );
}
