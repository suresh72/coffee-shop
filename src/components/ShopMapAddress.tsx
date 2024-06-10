import { Box, Link, Stack } from "@mui/material";
import React from "react";
import "../styles/shopmapaddress.css";

type Address = {
  address: string;
  link: string;
  embededLink: string;
};

const addressData: Address[] = [
  {
    address: "Coffe-shop Address 1",
    embededLink:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15301.85601956187!2d80.6410646!3d16.5026563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd03a6f2c07efe1c!2sVasundhara%20Diamond%20Roof%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1607514440452!5m2!1sen!2sin",
    link: "https://www.google.com/maps/place/Vasundhara+Diamond+Roof+Pvt+Ltd/@16.5026563,80.6410646,15z/data=!4m5!3m4!1s0x0:0xfd03a6f2c07efe1c!8m2!3d16.5026563!4d80.6410646",
  },
  {
    address: "Coffe-shop Address 2",
    embededLink:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15301.85601956187!2d80.6410646!3d16.5026563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd03a6f2c07efe1c!2sVasundhara%20Diamond%20Roof%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1607514440452!5m2!1sen!2sin",
    link: "https://www.google.com/maps/place/Vasundhara+Diamond+Roof+Pvt+Ltd/@16.5026563,80.6410646,15z/data=!4m5!3m4!1s0x0:0xfd03a6f2c07efe1c!8m2!3d16.5026563!4d80.6410646",
  },
];

export const ShopMapAddress = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 4, sm: 4, md: 4 }}
      justifyContent="center"
      className="shopmapaddress"
    >
      {addressData.map(({ address, link, embededLink }, idx: number) => {
        return (
          <Stack
            key={address + idx}
            direction="column"
            className="shopmapaddress__item"
          >
            <Link target="_blank" href={link}>
              <Box className="shopmapaddress__img">
                <iframe src={embededLink}></iframe>
              </Box>
            </Link>
            <Stack direction="column" className="shopmapaddress__item--content">
              {address}
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};
