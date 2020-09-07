import React from "react";

export default function ArtistDetail(props) {
  const artistDetail = props.artists.find((artist) => {
    return artist.id === parseInt(props.match.params.id);
  });

  return (
    <>
      <h1>Details for {artistDetail.name}</h1>
      <ul>
        {artistDetail.Songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
    </>
  );
}
