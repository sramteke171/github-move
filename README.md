# Muse React Frontend

Yesterday we built a Node/Express API only backend app that serves JSON data. Today we'll build a React app to consume it.

## Solutions

- Muse App front-end solution that uses hooks is on a `solution` branch in this repo.
- [Muse App Express Backend Solution Branch](https://git.generalassemb.ly/jdr-0622/muse-express-api-backend-lesson/tree/solution)
- [Heroku Deployed Muse Express API Backend](https://muse-backend.herokuapp.com/)
- [Heroku Deployed Muse React Frontend](https://muse-react-frontend.herokuapp.com/)

## Set-up

1. Remember that `create-react-app` will generate a new project folder for you. So, go into your projects folder (or wherever you have your Muse Express Backend app) and run: 

	- `npx create-react-app muse-react-frontend`
	- `cd` into the folder and open the project in VS Code
	
1. Make sure that Postgres is running	
1. Make sure you have your Node/Express API app running with `nodemon` so that we can make requests


<br>

## Add React Router

[Follow the set-up from the React Router lesson](https://git.generalassemb.ly/jdr-0622/react-router#we-do-react-router-setup-10-min--040)

Create routes, links, and components for:


| Component | Renders                                   | Route         |
| --------- | ----------------------------------------- | ------------- |
| App      | Contains the router and manages the state of the Artists                    | /             |
| AllArtists| A list of the Artists. Each Artist name will be a link for the Artist Detail page. It will also have a delete button to destoy an artist and a form to create new Artists.		                | /artists      |
| ArtistDetail | Detail for an Artist. It will list all the Songs for an artist and a form to create new songs. It also has the ability to edit an Artist.                   | /artists/:id  |

<br>

## App

This component should...

1. Be a class Component
1. Manage the state of an Artists array
1. Have a `componentDidMount()` method 
	- Makes an axios GET request to your backend to get all your Artists including Songs
	- `setState()` of artists to the response.data
1. Have a method `addArtist()`
	- Makes an axios `POST` request to the backend to create an Artist
	- The backend route we created yesterday is `localhost:3000/api/artists/`
1. Have a method `addSong()`
	- Makes an axios `POST` request to the backend to create an Artist
	- The backend route we created yesterday is `localhost:3000/api/artists/newsong`
	

<br>

## All Artists

This component should...

1. Render a list of all the Artists
1. Have a form to create a new Artist
	- Use an `onSubmit()` event handler
1. Have the ability to delete an Artist
1. Go to the Artist Detail when you click on an Artist name

<br>

## Artist Detail

This component should...

1. Render the Name of the Artist
1. Render a list of the Artist Songs
1. Have a form to create a new Song for the Artist
	- Use an `onSubmit()` event handler
1. (Optional) Render a form to edit the artist name


## Additional Resources

- [Heroku React Deploy](https://git.generalassemb.ly/jdr-0622/react-heroku-deployment)
