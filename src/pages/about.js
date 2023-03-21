import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import SEO from "../components/SEO";

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm sustainable pork belly</h2>
            <p>
              Roof party literally messenger bag solarpunk bicycle rights
              ethical. Vape skateboard blog selvage cornhole tbh lumbersexual
              knausgaard jawn unicorn food truck.
            </p>
            <p>
              Put a bird on it JOMO wayfarers tousled, locavore 3 wolf moon
              shoreditch VHS flexitarian. Solarpunk affogato forage, meggings
              street art shabby chic bitters fam four loko kombucha fashion axe
              tote bag big mood kinfolk.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person pouring salt in bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesomesauce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData
        }
      }
    }
  }
`;

export default About;
