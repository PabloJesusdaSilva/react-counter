import React, { useState } from "react";

import Albums from "./Albums";
import Counter from "./Counter";

const defaultPage = ' albums';

const pages = {
  albums: {
    text: 'Álbuns',
    component: Albums
  },
  counter: {
    text: 'Contador',
    component: Counter
  }
}

const App = () => {

  const [page, setPage] = useState(defaultPage);

  const handleChangePage = page => {
    setPage(page);
  }

  const Page = pages[page].component;

  const pageName = Object.keys(pages);

  return (
    <>
      {
        pageName.map(page => <button onClick={() => handleChangePage(page)}> {pages[page].text} </button>)
      }

      { Page && <Page /> }
    </>
  );
}

export default App;
