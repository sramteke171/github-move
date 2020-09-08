# Muse React Frontend

## Solutions

- Muse App front-end solution is on a `solution` branch in this repo.
- [Muse App Express Backend Solution Branch](https://git.generalassemb.ly/jdr-0622/muse-express-api-backend-lesson/tree/solution)
- [Heroku Deployed Muse Express API Backend](https://muse-backend.herokuapp.com/)
- [Heroku Deployed Muse React Frontend](https://muse-react-frontend.herokuapp.com/)

## Set-up

1. Remember that `create-react-app` will generate a new project folder for you. So, go into your projects folder (or wherever you have your Muse Express Backend app) and run: 

	- `npx create-react-app muse-react-frontend`
	- `cd` into the folder and open the project in VS Code

<br>

## Add React Router

[Follow the set-up from the React Router lesson](https://git.generalassemb.ly/jdr-0622/react-router#we-do-react-router-setup-10-min--040)

Create routes, links, and components for:


| Component | Renders                                   | Route         |
| --------- | ----------------------------------------- | ------------- |
| Home      | "Welcome to Muse"                    | /             |
| AllArtists| A list of the Artists. Each Artist name will be a link for the Artist Detail page. It will also have a delete button to destoy an artist and a form to create new Artists.		                | /artists      |
| ArtistDetail | Detail for an Artist. It will list all the Songs for an artist and a form to create new songs. It also has the ability to edit an Artist.                   | /artists/:id  |

<br>

## Home Component

1. Create a `src/components` direrctory. Inside, create `Home.js`. Make sure to import in `App.js`

```js
import React from "react";

function Home() {
  return (
    <div>
      <h1>Welcome to Muse</h1>
    </div>
  );
}

export default Home;
```

<br>

## Additional Resources

- [Heroku React Deploy](https://blog.heroku.com/deploying-react-with-zero-configuration#create-and-deploy-a-react-app-in-two-minutes)
