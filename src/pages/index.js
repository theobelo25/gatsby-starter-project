import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <Layout>
      <SEO title="Home Page" />
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="Flour and eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
      </main>
      <AllRecipes />
    </Layout>
  );
};

export default Home;
