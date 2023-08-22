import React, { useState, useEffect } from "react";

const Users = () => {
  const [loading, setLoanding] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoanding(true); 

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        setLoanding(false);
      });
  }, []);

  return (
    <>
      <h1>Users</h1>
      {
        loading === true ? 'Carregando...' : ''
      }
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