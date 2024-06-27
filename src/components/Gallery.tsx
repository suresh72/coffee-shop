import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Typography } from "@mui/material";

const imageListStyle = {
  "& img": {
    width: "100%",
    height: "220px !important",
  },
};

export const Gallery = () => {
  return (
    <Box
      id="gallery"
      width={{
        sx: "90%",
        sm: "80%",
        md: "80%",
        lg: "60%",
      }}
      height={{
        sx: 450,
        sm: 450,
        md: 600,
        lg: 600,
      }}
      margin={"0 auto"}
      display={"flex"}
      flexDirection={"column"}
      alignItems="center"
      sx={{ background: `var(--white-color)` }}
    >
      <Typography
        width={"fit-content"}
        variant="h4"
        textAlign="center"
        my={4}
        mx={"auto"}
        fontWeight={"bold"}
        sx={{ borderBottom: `1px solid var(--border-color)` }}
      >
        Gallery
      </Typography>
      <ImageList
        sx={{
          width: "100%",
          height: "100%",
          margin: "0 auto",
          boxShadow: `0 0 10px rgba(0, 0, 0, 0.2)`,
        }}
        cols={3}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={imageListStyle}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            {/* <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            /> */}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

const baseUrl = `/assets/images/gallery`;

const itemData = [
  {
    img: `${baseUrl}/A41A9308.jpg`,
    title: "Breakfast",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    img: `${baseUrl}/A41A9336.jpg`,
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: `${baseUrl}/A41A9344.jpg`,
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: `${baseUrl}/A41A9359.jpg`,
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: `${baseUrl}/A41A9395.jpg`,
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: `${baseUrl}/A41A9412.jpg`,
    title: "Honey",
    author: "@arwinneil",
    featured: true,
  },
  {
    img: `${baseUrl}/A41A9452.jpg`,
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: `${baseUrl}/A41A9464.jpg`,
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: `${baseUrl}/A41A9468.jpg`,
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: `${baseUrl}/A41A9481.jpg`,
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: `${baseUrl}/A41A9504.jpg`,
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: `${baseUrl}/A41A9510.jpg`,
    title: "Bike",
    author: "@southside_customs",
  },
  {
    img: `${baseUrl}/A41A9512.jpg`,
    title: "Bike",
    author: "@southside_customs",
  },
  {
    img: `${baseUrl}/A41A9529.jpg`,
    title: "Bike",
    author: "@southside_customs",
  },
];
