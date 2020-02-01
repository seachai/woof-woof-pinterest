import React from "react";
import Images from "../Dog-Images/Images";

import Masonry from "react-masonry-css";

import "./Dogs.scss";

const Dogs = () => (
  <Masonry
    breakpointCols={3}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column"
  >
    <Images />
    <Images />
    <Images />
  </Masonry>
);

export default Dogs;
