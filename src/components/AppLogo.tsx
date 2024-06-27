import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const AppLogo = () => {
  return (
    <Stack direction={"row"} spacing={0.5} alignItems={"center"}>
      <Box className="home__carousel-image-container">
        <Box
          component="img"
          src={`/assets/images/logo/logo_Brown_transparent.png`}
          alt="logo"
          width={72}
          mt={1}
        />
      </Box>
      <Typography variant="h4" fontSize={"2rem"} fontWeight={700}>
        Coffee.
      </Typography>
    </Stack>
  );
};
