import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AppLogo } from "./AppLogo";
import { LocationOnOutlined, Map } from "@mui/icons-material";
interface TextLink {
  text: string;
  link: string;
}

interface RenderItem {
  title: string;
  links: TextLink[];
}

const branches: RenderItem = {
  title: "Branches",
  links: [
    { text: "India", link: "" },
    // { text: "USA", link: "" },
    // { text: "France", link: "" },
    // { text: "Africa", link: "" },
    // { text: "Japan", link: "" },
  ],
};

const contacts: RenderItem = {
  title: "Contact Us",
  links: [
    { text: "Email Us", link: "" },
    { text: "Community", link: "" },
    { text: "Call Us", link: "" },
    { text: "Ads Info", link: "" },
    { text: "Social M", link: "" },
  ],
};

const supports: RenderItem = {
  title: "Supports",
  links: [
    { text: "About Us", link: "" },
    { text: "FAQs", link: "" },
    { text: "Private Policy", link: "" },
    { text: "Career", link: "" },
    { text: "Review Us", link: "" },
  ],
};

const renderItem = ({ title, links }: RenderItem) => {
  return (
    <Stack direction="column" className="item" spacing={2}>
      <Typography
        fontWeight={700}
        variant="h4"
        noWrap
        style={{ color: `var(--white-color)` }}
      >
        {title}
      </Typography>
      <Stack direction="column" spacing={2}>
        {links.map(({ text, link }) => (
          <Link
            key={text}
            to={link}
            style={{ color: `var( --text-color-light)` }}
          >
            <Box
              sx={{
                fontWeight: "600",
                "&:hover": { color: `var(--white-color)` },
              }}
            >
              {text}
            </Box>
          </Link>
        ))}
      </Stack>
    </Stack>
  );
};

export const Footer = () => {
  return (
    <Stack
      style={{
        background: `var(--section-bg)`,
        padding: "4rem 2rem 3rem",
        color: `var(--text-color-light)`,
      }}
      className="footer"
      direction="column"
      justifyContent={"center"}
      alignItems={"center"}
      spacing={4}
    >
      <Stack
        sx={{
          borderBottom: `2px solid var(--text-color-light)`,
          paddingBottom: 4,
          justifyContent: "center",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "row",
          },
        }}
        spacing={{
          xs: 4,
          sm: 2,
        }}
      >
        <Stack
          className="footer__left"
          spacing={4}
          width={{
            sx: "80%",
            sm: "45%",
          }}
        >
          <Stack direction="column">
            <AppLogo />
          </Stack>
          <Stack direction="column">
            <Typography
              variant="body1"
              fontSize={{
                xs: "1.5rem",
                sm: "2rem",
              }}
              fontWeight={500}
              width={{ xs: "100%", sm: "80%" }}
            >
              Coffee is a cafe that serve many variant of coffee and other
              dishes with very comfortable place.
            </Typography>
          </Stack>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <LocationOnOutlined style={{ fontSize: "3rem" }} />
            <Typography
              variant="body1"
              fontSize={{ xs: "1.5rem", sm: "2rem" }}
              fontWeight={500}
            >
              USA Californa 65 South Fifth St.Sicklerville, NJ 08081
            </Typography>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          className="footer__right"
          spacing={{
            xs: 2,
            sm: 4,
            md: 8,
            lg: 16,
          }}
          justifyContent={{ xs: "center" }}
        >
          {renderItem(branches)}
          {renderItem(contacts)}
          {renderItem(supports)}
        </Stack>
      </Stack>

      <Stack justifyContent={"center"}>
        <Typography variant="h4" style={{ color: `var(--white-color)` }}>
          &#169; coffee . All rigths reserved
        </Typography>
      </Stack>
    </Stack>
  );
};
