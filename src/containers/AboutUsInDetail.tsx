import { Box, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { Layout, Wrapper } from "../components";
import { styled } from "@mui/system";

interface AboutData {
  content: string;
  image: string;
  rightPlacement?: boolean;
}

const aboutData: AboutData[] = [
  {
    image: "https://via.placeholder.com/150",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
          sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
          Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc
          egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
          luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris
          ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
          nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec
          ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing
          diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
          Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
          Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu
          magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
          Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at
          interdum magna augue eget diam. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia
          molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet
          augue congue elementum. Morbi in ipsum sit amet pede facilisis
          laoreet. Donec lacus nunc, viverra nec.`,
    rightPlacement: true,
  },
  {
    image: "https://via.placeholder.com/150",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
          sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
          Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc
          egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
          luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris
          ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
          nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec
          ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing
          diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
          Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
          Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu
          magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
          Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at
          interdum magna augue eget diam. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia
          molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet
          augue congue elementum. Morbi in ipsum sit amet pede facilisis
          laoreet. Donec lacus nunc, viverra nec.`,
  },
  {
    image: "https://via.placeholder.com/150",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
          sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
          Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc
          egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
          luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris
          ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
          nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec
          ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing
          diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
          Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
          Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu
          magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
          Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at
          interdum magna augue eget diam. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia
          molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet
          augue congue elementum. Morbi in ipsum sit amet pede facilisis
          laoreet. Donec lacus nunc, viverra nec.`,
  },
  {
    image: "https://via.placeholder.com/150",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
          sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
          Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc
          egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
          luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris
          ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
          nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec
          ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing
          diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla.
          Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
          Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu
          magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.
          Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at
          interdum magna augue eget diam. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia
          molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet
          augue congue elementum. Morbi in ipsum sit amet pede facilisis
          laoreet. Donec lacus nunc, viverra nec.`,
  },
];

const Image = styled("img")<TextWrapperProps>(({ theme, rightPlacement }) => ({
  overflow: "hidden",
  float: rightPlacement ? "right" : "left",
  margin: rightPlacement ? "0 0 0 16px" : "0 16px 0 0",
  width: "150px",
  height: "auto",
}));

interface TextWrapperProps {
  rightPlacement?: boolean;
}

const TextWrapper = styled(Box)(() => ({
  overflow: "hidden",
}));

const AboutItem = ({ content, image, rightPlacement }: AboutData) => {
  return (
    <Box>
      <TextWrapper>
        <Image
          rightPlacement={rightPlacement}
          src="https://via.placeholder.com/150"
          alt="Example"
        />
        <Typography variant="body1" fontSize={"medium"}>
          {content}
        </Typography>
      </TextWrapper>
    </Box>
  );
};

export const AboutUsInDetail = () => {
  return (
    <Layout>
      <Typography
        width={"fit-content"}
        variant="h4"
        textAlign="center"
        my={4}
        mx={"auto"}
        fontWeight={"bold"}
        sx={{ borderBottom: `1px solid var(--border-color)` }}
      >
        About Us
      </Typography>
      <Wrapper>
        <Stack direction={"column"} spacing={6}>
          {aboutData.map((data, idx: number) => (
            <Fragment key={idx}>
              <AboutItem {...data} />
            </Fragment>
          ))}
        </Stack>
      </Wrapper>
      <Box height={80} />
    </Layout>
  );
};
