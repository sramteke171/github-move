import React from "react";
import { Link } from "react-router-dom";

export default function AllArtists(props) {
  console.log(props);

  return (
    <>
      <h1>All Artists</h1>
      <form onSubmit={(e) => props.createNewArtist(e)}>
        Artist Name: <input type="text" name="name" />
        <input type="submit" value="New Artist" />
      </form>

      <ul>
        {props.artists.map((artist) => {
          return (
            <Link to={`/artists/${artist.id}`} key={artist.id}>
              <li>{artist.name}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
}
