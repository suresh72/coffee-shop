import { Box } from "@mui/material";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}
export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Box
      width={{
        xs: "90%",
        sm: "60%",
        md: "50%",
        lg: "50%",
      }}
      sx={{ margin: "0 auto" }}
    >
      {children}
    </Box>
  );
};
