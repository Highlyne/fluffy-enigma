import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const ScrapeBtn = props => (
  <span className="btn btn-danger scrape-new" {...props}>
  </span>
);

export default ScrapeBtn;
