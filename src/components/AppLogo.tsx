import { Coffee } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import React from "react";

export const AppLogo = () => {
  return (
    <Stack direction={"row"} spacing={2} alignItems={"center"}>
      <Coffee style={{ fontSize: "3rem" }} />
      <Typography variant="h4" fontSize={"2rem"} fontWeight={700}>
        Coffee.
      </Typography>
    </Stack>
  );
};
