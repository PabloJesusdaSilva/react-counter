import React, { useEffect, useState } from "react";

const Albums = () => {
  const [albums, setAlbums] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typecode.com/albums')
      .then(res => res.json)
      .then(data => {
        setAlbum(data);
      });
  }, [])

  return (
    <>
      <h2>Álbuns</h2>
      {
        albums.map(album => {
          <div>
            <span>{album.title} - {album.id}</span>
          </div>
        })
      }

    </>
  );
}

export default Albums;