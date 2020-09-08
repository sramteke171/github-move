import React from "react";

export default function ArtistDetail(props) {
  console.log(props);
  const artistDetail = props.artists.find((artist) => {
    return artist.id === parseInt(props.match.params.id);
  });

  return (
    <>
      <h1>Details for {artistDetail.name}</h1>
      <form onSubmit={(e) => props.createNewSong(e)}>
        <legend>Add a New {artistDetail.name} Song</legend>
        Title: <input type="text" name="title" />
        <input type="hidden" name="artistId" value={artistDetail.id} />
        <br />
        <input type="submit" value="New Song" />
      </form>
      <ul>
        {artistDetail.Songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
    </>
  );
}
