import React, { useState, useEffect } from "react";
import axios from "axios";

import FsLightbox from "fslightbox-react";
import InfiniteScroll from "react-infinite-scroll-component";

const Images = () => {
  const [images, setImages] = useState([]);
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    try {
      fetchDogs();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchDogs = async (count = 3) => {
    let results = await axios
      .get(`https://dog.ceo/api/breeds/image/random/${count}`)
      .then((res) => {
        setImages([...images, ...res.data.message]);
      });
    return results;
  };

  const Images = () => {
    return images.map((photos, index) => (
      <div className="cards" key={index}>
        <img
          src={photos}
          alt="Woof woof"
          className="dog-images"
          loader="lazy"
          onClick={() => setToggler(!toggler)}
        />
      </div>
    ));
  };

  return (
    <InfiniteScroll
      dataLength={images}
      next={() => fetchDogs()}
      hasMore={true}
      loader={
        <span
          role="img"
          aria-label="loading-doggy"
          style={{ fontSize: "6rem" }}
        >
          🐶 🐶 🐶
        </span>
      }
    >
      <FsLightbox toggler={toggler} sources={[images]} />
      <Images />
    </InfiniteScroll>
  );
};

export default Images;
