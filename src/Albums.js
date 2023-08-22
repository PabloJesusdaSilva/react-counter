import React, { useEffect, useState } from "react";

import Template from "./Template";
import Loading from "./Loading"

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
    <Template title="Álbuns">
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
    </Template>
  )
}

export default Albums;