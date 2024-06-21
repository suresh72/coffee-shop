import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { AppLogo } from "./AppLogo";
import {
  Call,
  Close,
  Facebook,
  GitHub,
  Instagram,
  Menu,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { useHash, useScroll } from "../hooks";
import { Link } from "react-router-dom";

const headerStyle = {
  color: `var(--white-color)`,
  "&.bg-white": {
    background: `var(--white-color)`,
    color: `var(--text-color)`,
    "& .links a": {
      color: `var(--text-color) !important`,
      fontSize: "1.5rem",
      "&.active:before": {
        backgroundColor: `var(--text-color) !important`,
      },
    },
  },
};

interface TextLink {
  text: string;
  link: string;
}

const links: TextLink[] = [
  {
    text: "Home",
    link: "home",
  },
  {
    text: "About",
    link: "aboutus",
  },
  { text: "Menu", link: "menu" },
  { text: "Gallery", link: "gallery" },
  { text: "Location", link: "location" },
];

const linkButton = {
  color: "var(--white-color)",
  padding: ".5rem 1.5rem",
  fontSize: "2rem",
  whiteSpace: "nowrap",
  position: "relative",
  textDecoration: "none",
  zIndex: 2,
  "&:before": {
    content: '""',
    position: "absolute",
    left: "50%",
    bottom: "-8px",
    height: "6px",
    width: "6px",
    borderRadius: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "var(--white-color)",
    opacity: 0,
    zIndex: 1,
  },
  "&.active:before": {
    opacity: 1,
  },
};

const navlinksStyle = {
  "&.show": {
    display: "block",
    width: "50%",
    position: "fixed",
    right: 0,
    top: 0,
    bottom: 0,
    height: "100vh",
    color: `var(--text-color) !important`,
    padding: "2rem",
    boxShadow: `0 0 10px rgba(0, 0, 0, 0.2)`,
    zIndex: 2,

    "&:before": {
      content: '""',
      position: "fixed",
      background: `var(--text-color-light)`,
      width: "100%",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.4,
      zIndex: -1,
    },
    "&:after": {
      content: '""',
      position: "fixed",
      background: `var(--white-color)`,
      width: "50%",
      height: "100vh",
      top: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
    },
    "& .links": {
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "center",
      gap: "2rem",
      "& a": {
        color: `var(--text-color) !important`,
        fontSize: "1.5rem",
        "&.active:before": {
          backgroundColor: `var(--text-color) !important`,
        },
      },
    },
    "& .makeACall": {
      justifyContent: "center",
      marginTop: "3rem",
      fontWeight: "600",

      "& .MuiSvgIcon-root": { fontSize: "1.5rem !important" },
      "& h6": { fontSize: "1.5rem" },
    },
  },
};

const socialIcons = {
  position: "absolute",
  bottom: "6rem",
  left: 0,
  right: 0,
  margin: "0 auto",
  justifyContent: "center",
  "& svg": {
    color: `var(--text-color-light)`,
  },
};

interface SocialLink {
  icon: React.ReactNode;
  link: string;
}

const icons: SocialLink[] = [
  {
    icon: <Facebook />,
    link: "/facebook",
  },
  {
    icon: <Twitter />,
    link: "/twitter",
  },
  {
    icon: <Instagram />,
    link: "/instagram",
  },
  {
    icon: <GitHub />,
    link: "/github",
  },
  {
    icon: <YouTube />,
    link: "/youtube",
  },
];

export const Navbar = () => {
  const hash = useHash();
  const scrolled = useScroll();
  const [show, setShow] = useState<boolean>(false);

  const handleToggle = () => {
    setShow((prev) => !prev);
  };

  return (
    <Stack
      sx={headerStyle}
      justifyContent={"space-between"}
      direction={"row"}
      position={"fixed"}
      top={0}
      right={0}
      left={0}
      margin={"0 auto"}
      padding={{
        xs: "0 5%",
        sm: "0 20%",
      }}
      height={"7rem"}
      zIndex={1600}
      alignItems={"center"}
      spacing={"12rem"}
      className={scrolled ? "bg-white" : ""}
    >
      <AppLogo />
      <Stack
        direction={"row"}
        flexGrow={1}
        width={"100%"}
        display={{xs: "flex", sm: "flex", md: "none" }}
        justifyContent={"flex-end"}
      >
        <Menu fontSize="large" onClick={handleToggle} />
      </Stack>
      <Stack
        sx={navlinksStyle}
        display={{ md: "flex", sm: "none" }}
        direction={"row"}
        className={show ? "show" : ""}
        justifyContent={"space-between"}
        flexGrow={1}
        marginLeft={{
          xs: "0 !important",
          sm: "0 !important",
          md: "12rem !important",
        }}
      >
        <Box
          display={{
            xs: show ? "flex" : "none",
            sm: show ? "flex" : "none",
            md: "none",
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "row",
            marginRight: "2rem",
          }}
        >
          <Close fontSize="large" onClick={handleToggle} />
        </Box>
        <Stack
          display={{
            xs: show ? "flex" : "none",
            sm: show ? "flex" : "none",
            md: "flex",
          }}
          className="links"
          direction={"row"}
          spacing={1}
        >
          {links.map(({ text, link }) => {
            return (
              <Box
                key={text}
                component="a"
                sx={linkButton}
                href={`#${link}`}
                className={hash === link ? "active" : ""}
                onClick={() => setShow(false)}
              >
                {text}
              </Box>
            );
          })}
        </Stack>
        <Stack
          className="makeACall"
          direction={"row"}
          alignItems={"center"}
          spacing={1.5}
          display={{
            xs: show ? "flex" : "none",
            sm: show ? "flex" : "none",
            md: "flex",
          }}
        >
          <Call style={{ fontSize: "2.5rem" }} />
          <Typography
            variant="subtitle1"
            fontSize={"large"}
            fontWeight={600}
            noWrap
          >
            Make A Call Now
          </Typography>
        </Stack>
        <Stack
          sx={socialIcons}
          className="social-icons"
          direction={"row"}
          alignItems={"center"}
          spacing={1}
          display={{
            xs: show ? "flex" : "none",
            sm: show ? "flex" : "none",
            md: "none",
          }}
        >
          {icons.map(({ icon, link }: SocialLink) => {
            return (
              <Box component={Link} to={link} target="_blank">
                {icon}
              </Box>
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};
