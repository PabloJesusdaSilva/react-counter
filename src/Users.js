import React, { useState, useEffect } from "react";

import Template from "./Template";
import Loading from "./Loading";

const Users = () => {
  const [isLoading, setIsLoanding] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setIsLoanding(true); 

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setIsLoanding(false);
      });
  }, []);

  return (
    <Template title="Usuários">
      <Loading visible={isLoading} />
      {
        users.map(user => {
          return (
            <div>
              <span>{user.name}</span>
            </div>
          )
        })
      }
    </Template>
  );
}

export default Users;