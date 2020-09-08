# muse-frontend

1. `npx create-react-app muse-frontend` and `cd`

<br>

## Add React Router

[Follow the set-up from the React Router lesson](https://git.generalassemb.ly/jdr-0622/react-router#we-do-react-router-setup-10-min--040)

Create routes/components for:

- `/` - Home Page
- `/artists` - Show all artists
- `/artists/:id` - Detail for an Artist. Also create a new song
- `/artists/:id/edit` - Update an Artist on their detail page
- `/artists/:id/delete` - Delete an Artist
- `/artists/new` - A form to create a new Artist

| Component | Renders                                   | Route         |
| --------- | ----------------------------------------- | ------------- |
| Home      | "This is the homepage"                    | /             |
| Greet     | A greeting from a url parameter passed in | /greet/:param |
| Users     | A list of users                           | /users/       |
| NewUser   | A form that lets you add a username       | /users/new    |

<br>

## Home Component

1. Create `Home.js` in `components` and make sure to import in `App.js`

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
