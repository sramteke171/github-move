import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import AllArtists from "./AllArtists";
import ArtistDetail from "./ArtistDetail";
const backendUrl =
  process.env.REACT_APP_BACKEND_URL || "http://localhost:3000/api";

function App(props) {
  console.log(props);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    async function getArtists() {
      let axiosArtists = await axios(`${backendUrl}/artists`);
      setArtists(axiosArtists.data.allArtists);
      console.log(axiosArtists);
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

    await setArtists(
      artists.map((artist) => {
        if (artist.id === data.song.artistId) {
          artist.Songs.push(data.song);
        }
        return artist;
      })
    );
  };

  return (
    <div className="App">
      <nav>
        <h4>MUSE!</h4>
        <Link to="/">Home</Link>
        <Link to="/artists/new">Create a New Artist</Link>
        <Link to="/artists">All Artists</Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route
            exact
            path="/artists"
            component={() => <AllArtists artists={artists} />}
          />
          <Route
            exact
            path="/artists/:id"
            component={(routerProps) => (
              <ArtistDetail
                {...routerProps}
                artists={artists}
                createNewSong={(e) => createSong(e)}
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
