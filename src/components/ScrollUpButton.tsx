import { Box, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useScroll } from "../hooks";
import { ArrowUpwardOutlined } from "@mui/icons-material";

const style = {
  position: "fixed",
  bottom: "-30%",
  right: "3rem",
  height: "3rem",
  width: "3rem",
  fontSize: "2rem",
  borderRadius: "4px",
  color: `var(--primary-color-hover)`,
  cursor: "pointer",
  boxShadow: `0 3px 6px rgba(0, 0, 0, 0.2)`,
  backgroundColor: `var(--white-color)`,
  zIndex: `var(--z-overlay)`,
  transition: `var(--tran-0-3)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&.active": {
    bottom: "3rem",
  },
};

const ScrollUpButton = () => {
  const isScrolled = useScroll();
  const link = window.location.pathname + "#home";

  return (
    <Stack
      component="a"
      href={link}
      sx={style}
      className={isScrolled ? "active" : ""}
    >
      <i className="bx bx-up-arrow-alt scrollUp-icon"></i>
      <ArrowUpwardOutlined style={{ color: `var(--primary-color-hover)` }} />
    </Stack>
  );
};

export default ScrollUpButton;
