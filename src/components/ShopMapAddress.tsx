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
    address:
      "Double Quotes Coffee Space | Dine In | 4th Main Road | Anna Nagar",
    embededLink:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15544.547880267937!2d80.215846!3d13.0905046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ad893d6011%3A0x52066ea6b2a4a38a!2sDouble%20Quotes%20Coffee%20Space%20%7C%20Dine%20In%20%7C%204th%20Main%20Road%20%7C%20Anna%20Nagar!5e0!3m2!1sen!2sin!4v1718607990875!5m2!1sen!2sin",
    link: "https://maps.app.goo.gl/WEugfnUU2AnBnEyv7",
  },
  {
    address:
      "Double Quotes Coffee Space | Dine In | 4th Main Road | Anna Nagar",
    embededLink:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15544.547880267937!2d80.215846!3d13.0905046!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ad893d6011%3A0x52066ea6b2a4a38a!2sDouble%20Quotes%20Coffee%20Space%20%7C%20Dine%20In%20%7C%204th%20Main%20Road%20%7C%20Anna%20Nagar!5e0!3m2!1sen!2sin!4v1718607990875!5m2!1sen!2sin",
    link: "https://maps.app.goo.gl/WEugfnUU2AnBnEyv7",
  },
];

export const ShopMapAddress = () => {
  return (
    <Stack
      id="location"
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
