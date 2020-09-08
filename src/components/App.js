import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import AllArtists from "./AllArtists";
import ArtistDetail from "./ArtistDetail";
const backendUrl =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api";

function App() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    async function getArtists() {
      let axiosArtists = await axios(`${backendUrl}/artists`);
      setArtists(axiosArtists.data.allArtists);
    }
    getArtists();
  }, []);

  const createSong = async (e) => {
    e.preventDefault();
    let artistId = parseInt(e.target.artistId.value);
    let response = await axios.post(
      `${backendUrl}/artists/${artistId}/newsong`,
      {
        title: e.target.title.value,
        artistId: artistId,
      }
    );

    let data = response.data;
    console.log(data);

    await setArtists(
      artists.map((artist) => {
        if (artist.id === data.song.artistId) {
          // artist.Songs.push(data.song);
          artist.Songs = [...artist.Songs, data.song];
        }
        return artist;
      })
    );
  };

  const createArtist = async (e) => {
    e.preventDefault();
    let response = await axios.post(`${backendUrl}/artists/`, {
      name: e.target.name.value,
    });

    let newArtist = response.data.newArtist;

    await setArtists([...artists, newArtist]);
  };

  const deleteArtist = async (e) => {
    e.preventDefault();
    let artistId = parseInt(e.target.id);
    let arrayIndex = e.target.getAttribute("arrayindex");

    await axios.delete(`${backendUrl}/artists/${artistId}`);

    const artistsCopy = [...artists];
    artistsCopy.splice(arrayIndex, 1);
    await setArtists([...artistsCopy]);
  };

  const updateArtist = async (e) => {
    e.preventDefault();
    let artistId = parseInt(e.target.artistId.value);
    let response = await axios.put(`${backendUrl}/artists/${artistId}`, {
      name: e.target.name.value,
      artistId: artistId,
    });

    let updatedArtist = response.data.artist;

    await setArtists(
      artists.map((artist, index) => {
        if (artist.id === updatedArtist.id) {
          return updatedArtist;
        } else {
          return artist;
        }
      })
    );
  };

  return (
    <div className="App">
      <nav>
        <h4>MUSE!</h4>
        <Link to="/">Home</Link>
        <Link to="/artists">All Artists</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route
            exact
            path="/artists"
            component={() => (
              <AllArtists
                artists={artists}
                createArtist={(e) => createArtist(e)}
                deleteArtist={(e) => deleteArtist(e)}
              />
            )}
          />
          <Route
            exact
            path="/artists/:id"
            component={(routerProps) => (
              <ArtistDetail
                {...routerProps}
                artists={artists}
                createSong={(e) => createSong(e)}
                updateArtist={(e) => updateArtist(e)}
              />
            )}
          />
          <Route path="/*" render={() => <Redirect to="/" />} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
