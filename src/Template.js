import React from "react";

import Header from "./Header";

const Template = ({ title, children }) => {
  return (
    <>
      <Header title={title} />
      {children}
    </>
  );
}

export default Template