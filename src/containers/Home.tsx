import * as React from "react";
import Box from "@mui/material/Box";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "../styles/home-carousel.css";
import { AboutUs } from "./AboutUs";
import { Gallery, Layout, ShopMapAddress } from "../components";
import { Menu } from "./Menu";

interface HomeCarousel {
  image: string;
  subTitle: string;
  title: string;
  btnText?: string;
}

const images: HomeCarousel[] = [
  {
    image: "DQ-Int-1.jpg",
    subTitle: "U'll really like what we do",
    title: "Fresh Coffee In The Morning ☕",
    btnText: "Buy One Now",
  },
  {
    image: "DQ-Int-2.jpg",
    subTitle: "Enjoy the finest coffee drinks.",
    title: "Enjoy Our Exclusive Coffee and Cocktails",
    btnText: "Explore",
  },
];

export const Home = () => {
  return (
    <Layout navbarProps={{ headerTransparentBg: true }}>
      <div id="home" style={{ marginTop: "-64px" }}>
        <Carousel autoPlay className="home__carousel">
          {images.map(({ subTitle, title, image, btnText }) => (
            <Box key={title}>
              <Box className="home__carousel-image-container">
                <Box
                  component="img"
                  src={`/assets/images/${image}`}
                  alt={title}
                />
              </Box>
              <Box className="home__carousel--content">
                <h4>{subTitle}</h4>
                <h2>{title}</h2>
                {btnText && <button className="button">{btnText}</button>}
              </Box>
            </Box>
          ))}
        </Carousel>
      </div>

      <Box
        sx={{
          height: {
            xs: 80,
            sm: 60,
          },
        }}
      />

      <AboutUs />

      <Box
        sx={{
          height: {
            xs: 60,
            sm: 220,
          },
        }}
      />
      <Menu />
      <Box height={40} />
      <Gallery />
      <Box height={80} />
      <ShopMapAddress />
      <Box height={80} />
    </Layout>
  );
};
