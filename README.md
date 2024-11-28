# Technical Assessment

## Setup instructions (including environment variables)

### Frontend

- Clone the repo
- Create a firebase project and enable Google Oauth
- Create a `.env` file and add the variables as defined under `.env.example`, include your respective firebase credentials
- Open a new terminal and `cd` into the `server` folder and execute
- Run `nvm use` to switch to the required npm version for this project (v20.11.1)
- Run `yarn` to install dependencies
- Run `yarn start` to start the project
- Frontend project is now running on `localhost:3000`

### Backend

- `cd` into the `backend` folder
- Follow the instructions in the `README.md` file to setup `firebase-adminsdk.json`
- Run `nvm use`
- Run `yarn` to install project dependencies
- Run `yarn start` to start the server

## Features implemented

### Screens

- Dashboard Screen
- Variable editing slide-over card screen
- Details screen

### Interactions

- Slide-over variable editing card interaction
- Data point hover interaction
- Variable selection interaction

## Technical decisions and trade-offs

### Frontend stack used

- React 18+ with TypeScript
- Tailwind CSS
- React Router for navigation
- State management using React hooks
- Google Oauth using Firebase authentication
- Bootstrapped the React project using Create React App
- Configured the project using [CRACO](https://craco.js.org/)
- Material UI for icons system

### Backend stack used

- Express.js backend to verify logged in user's tokens

### Project Structure

The project structure is inspired by `Ducks Architecture`. Heavily used this in my previous projects and has worked very well for us. The architecture is highly scalable for large scale applications, especially when we are implementing global state management solutions like Redux/Redux-Sagas. This architecture comes in very handy to have separation of concerns by segregrating the project into small containers on the basis of features/pages in the application.

```
├── backend # Main source code folder for backend
├── src # Main source code folder for frontend
├──── api # api files for the project
├──── app # top level higher order components for the app
├──── components # reusable components
├──── containers # features/pages for the app
├──── layouts # layouts available for the app
├──── mui # Material UI theme
├──── routes # route configurations and app initialization
├──── styles # custom `.scss` stylesheets
├──── utils # utilities for the project
```

## Known limitations

- No nav bar on mobile break point
- No support for email/password based sign in

## Time spent

- Roughly 6 hours

## Local development instructions

- As mentioned above

## Miscellaneous

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
