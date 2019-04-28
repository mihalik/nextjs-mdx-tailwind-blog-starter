import React from "react";

export default ({ children, meta }) => (
  <>
    <h1>{meta.title}</h1>
    <div className="markdown">{children}</div>
  </>
);
