# Isomorphic JavaScript using ReactJS

This repository contains the example code of a simple React Isomorphic App, with a presentation in Portuguese (Brazil).

You could also use it as a Isomorphic/Universal/SSR React App Boilerplate.

### Current Tech
 - [React](https://facebook.github.io/react/)
 - [Webpack](https://webpack.github.io/)
 - [WebpackDevServer](https://webpack.github.io/)
 - [Babel](https://babeljs.io/)
 - [Node.js](https://nodejs.org/en/)
 - [Nodemon](https://nodemon.io/)
 - [Express](http://expressjs.com/)
 - [EJS](http://www.embeddedjs.com/)

### Source Structure Detailed
Since Isomorphic applications are painful to configure and understand, here you got a detailed description of source directory structure
```
src/ # Source files directory #
    client/ # Files related to the React App #
        components/ # React components directory #
            App.js # React main component #
            *.js # Navigation Proof of Concept Components #
        index.js # React App entrypoint #

    server/ # Files related to the server (Node.js and Express) #
        views/ # ejs template views directory #
            index.ejs # EJS template for React App entrypoint #
        isomorphic.js # Isomorphic Configuration file #
        server.js # Express server entrypoint #

    shared/ # Files that are common for both client and server
        routes.js # React-Router routes configuration file #
```

### Installing
To install this project, you should run the following commands on your terminal:
```sh
git clone https://github.com/dmarquesdev/isomorphic-react.git
cd isomorphic-react
npm install
```

### Running
To run this project, you should run the following commands on your terminal:
```sh
npm run dev-server
npm start
```
#### WARNING!!! npm run dev-server should be executed on development enviroment only!!!

For production, first you should run:
```sh
npm build
```
to build the project using webpack and then:
```sh
npm start
```
to run the Express app.

### Development and Improvements

This repository will be mantained and constantly updated while (and probably after) I'm researching for my college's final project.

You could get more info about my project on [My Project's Repo](https://github.com/dmarquesdev/isomorphic-javascript).

If you want to contribute to this boilerplate in any way, please feel free to fork it and send a pull request. I will surely appreciate some help :)

#### But keep in mind that this project looks for simplicity, so you should think twice before adding more frameworks, given the current chaotic framework hell scenario that JavaScript community is living!

### Next planned features
 - Upgrade the default example component, add content to show the router benefits.
 - Add Redux to the boilerplate

### License
MIT
