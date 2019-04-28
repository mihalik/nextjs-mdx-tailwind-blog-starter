import React from "react";
import { MDXProvider } from "@mdx-js/react";

import Layout from "../components/layout";

export default ({ Component, ...props }, state) => (
  <MDXProvider components={{ wrapper: Layout }}>
    <Component {...props} />
  </MDXProvider>
);
