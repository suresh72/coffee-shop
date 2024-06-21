import { Box, Typography } from "@mui/material";
import React from "react";
import "../styles/aboutus.css";
import { Circle, FavoriteBorderRounded, Translate } from "@mui/icons-material";
import { ReadMoreButton } from "../components";
import { routePaths } from "../constants";

export const AboutUs = () => {
  return (
    <Box className="aboutus" id="aboutus" position={"relative"}>
      <Box className="aboutus__image-container">
        <Box
          component="img"
          src={`/assets/images/aboutImg.jpg`}
          alt="aboutus"
        />
      </Box>
      <Box className="aboutus__content">
        <Typography variant="h4" className="subtitle">
          <i>Why Choose Us</i>
        </Typography>
        <h2 className="title">What's make our coffee special!</h2>
        <p className="description">
          The company itself is a very successful company. Or she criticizes the
          laborious nature of things, and repels them with hatred, to gain
          pleasure, to be assumed by necessity. Here, is this older? I will be
          saved by that pain, the resilience that because
        </p>

        <ul className="aboutus__features">
          <li>Quality</li>
          <li>
            <Circle fontSize="small" color="disabled" />
          </li>
          <li>Branches</li>
          <li>
            <Circle fontSize="small" color="disabled" />
          </li>
          <li>Delivery</li>
        </ul>
        <Box className="readMoreBtn">
          <ReadMoreButton link={routePaths.aboutUs} />
        </Box>
      </Box>
      <Box className="aboutus__favourite">
        <Box className="fav__icon">
          <FavoriteBorderRounded />
        </Box>
        <Typography variant="body1">
          I really love the Cappucino. The coffee war very smooth.
        </Typography>
      </Box>
    </Box>
  );
};
