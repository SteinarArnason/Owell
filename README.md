# Boilerplate

## What it includes
 - [React](https://facebook.github.io/react/docs/getting-started.html)
 - [Redux](http://redux.js.org/index.html)
 - [ImmutableJS](https://facebook.github.io/immutable-js/)
 - [Webpack](http://webpack.github.io/docs/)
 - [Mocha](https://mochajs.org/) & [Enzyme](https://github.com/airbnb/enzyme/tree/master/docs)
 - [Babel](https://babeljs.io/) with ES6 & ES7 support
 - [Axios](https://www.npmjs.com/package/axios) for HTTP requests
 - Hot reloading in development

## Usage
### Development
  There are two seperate scripts used in development.

#### -> npm run test:watch
  This is used while in TDD, only runs unit tests defined. Does not launch the application nor build it with webpack.

#### -> npm start
  This is used to view the site in the browser with access to development tools like the Redux Dock and source map for chrome.

### Production
  When running the production build script the contents of the /src folder will be minimized and put into a bundle file along with relevant html documents and other files needed to serve the website.

#### -> npm run build

## Special thanks
  The project is largely based on a course by Cory House on [Pluralsight](https://www.pluralsight.com/courses/react-redux-react-router-es6 "Building Applications with React and Redux in ES6") so be sure to check it out.

## Other helpful links
  TBD
