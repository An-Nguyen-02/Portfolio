import React from "react";
import { Image, Box } from "@chakra-ui/react";
import "./../styles.scss";

export const Slide = ({ data: { url, title } }) => {
  return (
    <div className="slide">
      <Image src={url} title={title} className="slide-image" />
      <Box className="slide-title">{title}</Box>
    </div>
  );
}