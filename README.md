# Boilerplate

## What it includes
 - React
 - Redux
 - Webpack
 - Mocha & Enzyme
 - Babel with ES6 & ES7 support

## Usage
### Development
  There are two seperate scripts used in development.

#### npm run test:watch
  This is used while in TDD, only runs unit tests defined. Does not launch the application nor build it with webpack.

#### npm start
  This is used to view the site in the browser with access to development tools like the Redux Dock and source map for chrome.

### Production
  When running the production build script the contents of the /src folder will be minimized and put into a bundle file along with relevant html documents and other files needed to serve the website.

#### npm run build
