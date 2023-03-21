import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

const pageNotFound = () => {
  return (
    <Layout>
      <SEO title="Error 404" />
      <main className="error-page">
        <section>
          <h1>404</h1>
          <h2>page not found</h2>
        </section>
      </main>
    </Layout>
  );
};

export default pageNotFound;
