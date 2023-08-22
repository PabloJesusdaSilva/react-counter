import React, { useEffect, useState } from "react";

import Loading from "../components/Loading"

const Albums = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [albuns, setAlbums] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        setAlbums(data);
      });
  }, []);

  return (
    <>
      <Loading visible={isLoading} />

      {
        albuns.map(album => {
          return (
            <div>
              <span>{album.title} - id: {album.id}</span>
            </div>
          )
        })
      }
    </>
  )
}

export default Albums;