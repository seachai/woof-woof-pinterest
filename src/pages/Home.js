import React from "react";
import Cards from "../components/Cards/Cards";

const Home = () => {
  return (
    <section className="container">
      <h1 className="title">
        Woof Woof Pinterest
        <br />
        <span role="img" aria-label="doggy">
          🐶
        </span>
        <br />
      </h1>
      <Cards />
    </section>
  );
};

export default Home;
