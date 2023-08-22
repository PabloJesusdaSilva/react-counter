import React from "react";

const Nav = ({ pages, onChangePages }) => {
  const pageName = Object.keys(pages);

  return (
    <nav>
      {
        pageName.map(page => <button onClick={() => onChangePages(page)}> {pages[page].text} </button>)
      }
    </nav>
  )
}

export default Nav;