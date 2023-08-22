import React, { useState, useEffect } from "react";

import Loading from "../components/Loading";

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
    <>
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
    </>
  );
}

export default Users;