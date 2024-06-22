import { Box, Stack } from "@mui/material";
import React from "react";
import { Footer } from "./Footer";
import { Navbar, NavbarProps } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
  navbarProps?: NavbarProps;
}

export const Layout = ({ children, navbarProps = {} }: LayoutProps) => {
  return (
    <Box>
      <Navbar {...navbarProps} />
      <Stack
        direction={"column"}
        sx={{
          marginTop: "64px",
        }}
        height={`calc(100vh - 64px)`}
        width={"100%"}
      >
        <Box flexGrow={1}>{children}</Box>
        <Footer />
      </Stack>
    </Box>
  );
};
