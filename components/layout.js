import React from "react";

import BlogPost from "./blogPost";
import Page from "./page";

export default ({ embedded, meta, ...props }) => {
  // If a blog post is embedded we don't include all the wrapping components
  if (meta.layout === "blog" && embedded) {
    return <BlogPost meta={meta} {...props} />;
  }
  // If it is a standalone blog page, do some fancy wrapping
  if (meta.layout === "blog") {
    return (
      <Page meta={meta}>
        <BlogPost meta={meta} {...props} />
      </Page>
    );
  }
  // All other pages control their own layout
  return <Page meta={meta} {...props} />;
};
