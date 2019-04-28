import React from "react";
import NextSeo from "next-seo";

import "./page.css";
import Header from "./header";
import Footer from "./footer";

export default ({ children, meta }) => (
  <>
    <NextSeo config={meta} />
    <Header />
    <div className="mx-auto max-w-md">
      <div className="p-4 shadow rounded bg-white markdown">{children}</div>
    </div>
    <Footer />
  </>
);
