import React, { useState } from "react";

import Albums from "./pages/Albums";
import Counter from "./pages/Counter";
import Users from "./pages/Users";
import Template from "./templates/Template";

const defaultPage = 'counter';

const pages = {
  albums: {
    text: 'Álbuns',
    component: Albums
  },
  counter: {
    text: 'Contador',
    component: Counter,
  }, 
  users: {
    text: 'Usuários',
    component: Users,
  }
}

const App = () => {
  const [page, setPage] = useState(defaultPage);

  const handleChangePage = page => {
    setPage(page);
  }

  const Page = pages[page].component;

  return (
    <Template pages={pages} activePage={page} onChangePages={handleChangePage}>
      { Page && <Page /> }
    </Template>
  );
}

export default App;
