import React from "react";

import Hero from "./../comps/Hero";
import HeroInput from "./../comps/HeroInput";
import Banner from "./../comps/Banner";
import ScrollSnapX from "./../comps/ScrollSnapX";
import Cards from "./../comps/elems/Cards";
import Grid from "./../comps/elems/Grid";

const Home = () => {
  return (
    <div className="content">
      <Hero
        style={{
          marginBottom: "1rem",
        }}
      ></Hero>
      <HeroInput></HeroInput>
      <Banner style={{ marginTop: "2rem" }}>
        <header>Courses we offer</header>
        <ScrollSnapX
          style={{
            background: "#222222",
          }}
        >
          <Cards>Class XII</Cards>
          <Cards>Class XI</Cards>
          <Cards>Class X</Cards>
          <Cards>Class IX</Cards>
          <Cards>Class VIII</Cards>
          <Cards>Class VII</Cards>
          <Cards>Class VI</Cards>
          <Cards>Class V</Cards>
          <Cards>Class IV</Cards>
          <Cards>Class III</Cards>
          <Cards>Class II</Cards>
          <Cards>Class I</Cards>
        </ScrollSnapX>
      </Banner>
      <Banner background={"var(--indigo)"}>
        <header>India's Most Loved Educational Platform</header>
        <Grid minWidth={"150px"}>
          <p style={{ fontWeight: "bold" }}>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </Grid>
      </Banner>
    </div>
  );
};

export default Home;
