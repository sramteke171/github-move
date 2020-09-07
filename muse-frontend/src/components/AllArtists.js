import React from "react";
import { Link } from "react-router-dom";

export default function AllArtists(props) {
  return (
    <>
      <h1>All Artists</h1>
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
