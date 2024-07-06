import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export const AppLogo = () => {
  return (
    <Stack direction={"row"} spacing={1} alignItems={"center"}>
      <Box className="home__carousel-image-container">
        <Box
          component="img"
          src={`/assets/images/logo/logo_Brown_white.jpeg`}
          alt="logo"
          width={72}
          height={48}
          mt={1}
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Box>
    </Stack>
  );
};
