import React from "react";
import { Link } from "react-router-dom";

export default function AllArtists(props) {
  return (
    <>
      <h1>All Artists</h1>
      <form onSubmit={(e) => props.createArtist(e)}>
        Artist Name: <input type="text" name="name" />
        <input type="submit" value="New Artist" />
      </form>

      <ul>
        {props.artists.map((artist, index) => {
          return (
            <li key={artist.id}>
              <Link to={`/artists/${artist.id}`} key={artist.id}>
                {artist.name}
              </Link>
              <button
                key={`button-${artist.id}`}
                id={artist.id}
                arrayindex={index}
                onClick={props.deleteArtist}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
