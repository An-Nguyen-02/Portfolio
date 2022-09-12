import React from "react";
import { Image } from "@chakra-ui/react";
import "./../styles.scss";

export const Slide = ({ url }) => {
  return (
    <div className="slide">
      <Image src={url} className="slide-image" />
      {/* <Box className="slide-title">{title}</Box> */}
    </div>
  );
}