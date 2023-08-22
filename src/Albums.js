import React, { useEffect, useState } from "react";

const Albums = () => {
  const [loading, setLoading] = useState(false)
  const [albuns, setAlbums] = useState([])

  useEffect(() => {
    setLoading(true)

    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => {
        setLoading(false)
        setAlbums(data)
      })
  }, [])

  return (
    <>
      {
        loading === true ? 'Carregando...' : ''
      }
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