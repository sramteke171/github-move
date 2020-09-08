import React from "react";

export default function ArtistDetail(props) {
  console.log(props);
  const artistDetail = props.artists.find((artist) => {
    return artist.id === parseInt(props.match.params.id);
  });

  const showSongs = () => {
    if (artistDetail.Songs) {
      return artistDetail.Songs.map((song) => {
        return <li key={song.id}>{song.title}</li>;
      });
    }
  };

  return (
    <>
      <h1>{artistDetail.name} Details</h1>

      <h3>Edit Form</h3>
      <form onSubmit={(e) => props.updateArtist(e)}>
        <input type="text" name="name" placeholder={artistDetail.name} />
        <input type="hidden" name="artistId" value={artistDetail.id} />
        <input type="submit" value="Update Artist" />
      </form>

      <br />
      <br />
      <h3>Add a New {artistDetail.name} Song</h3>
      <form onSubmit={(e) => props.createSong(e)}>
        <input type="text" name="title" placeholder="Song Title" />
        <input type="hidden" name="artistId" value={artistDetail.id} />
        <input type="submit" value="New Song Title" />
      </form>
      <ol>{showSongs()}</ol>
    </>
  );
}
