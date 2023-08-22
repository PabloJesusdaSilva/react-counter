import React from "react";

import Header from "../partials/Header";
import Nav from "../partials/Nav"

const Template = ({children, pages, activePage, onChangePages }) => {
  const title = pages[activePage].text

  return (
    <>
      <Header title={title}/>
      <Nav pages={pages} onChangePages={onChangePages}/>
      {children}
    </>
  );
}

export default Template