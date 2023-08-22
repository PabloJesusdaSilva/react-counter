import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
      })
  }, [])

  return (
    <>
      <h1>Users</h1>

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