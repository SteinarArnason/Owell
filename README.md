# Boilerplate

## Prerequisites for running this project
  This project has been tested on Linux Mint and Windows 10 using the following versions without any errors. Newer versions are also likely to work but you can always fallback to the version number specified.

  - [NodeJS (v4.4.5)](https://nodejs.org)

  - npm (v2.15.5) installed automatically with [NodeJS](https://nodejs.org)

  - [Atom text editor](https://atom.io/) with the recommended packages found in the Notes section

  - Run the following command
```
-> npm install
```
  or alternatively
```
-> yarn install
```

## What it includes
 - [React](https://facebook.github.io/react/docs/getting-started.html)
 - [Redux](http://redux.js.org/index.html)
 - [ImmutableJS](https://facebook.github.io/immutable-js/)
 - [Webpack](http://webpack.github.io/docs/)
 - [Jest](https://facebook.github.io/jest/) & [Enzyme](https://github.com/airbnb/enzyme/tree/master/docs)
 - [Babel](https://babeljs.io/) with ES6 & ES7 support
 - [Axios](https://www.npmjs.com/package/axios) for HTTP requests
 - Hot reloading in development

## Usage
### Development
  There are two separate scripts used in development.
```
-> npm run jest:watch
```
  * This is used while in TDD, only runs unit tests defined. Does not launch the application nor build it with webpack.
```
-> npm start
```
  * This is used to view the site in the browser with access to development tools like the Redux Dock and source map for chrome. This also opens up to localhost:3000 in chrome.
    * To toggle the Redux Dock use <kbd>ctrl+h</kbd>, to move them around use <kbd>ctrl+q</kbd>.

### Production
  When running the production build script the contents of the /src folder will be minimized and put into a /dist folder. All javascript files will be bundled into one file. All the other files needed to server the website will also be moved to the /dist folder.

  Finally it opens up to localhost:3000 in chrome with the minified version.
```
-> npm run build
```
## Special thanks
  The project is largely based on a course by Cory House on [Pluralsight](https://www.pluralsight.com/courses/react-redux-react-router-es6 "Building Applications with React and Redux in ES6") so be sure to check it out.

  Also based on a final project I worked on while in Reykjavík University for QuizUp.

## Other helpful links
  - [React Components](https://facebook.github.io/react/docs/component-specs.html "Specifications and Lifecycles")
  - [ESLint general rules](http://eslint.org/docs/rules/)
  - [ESLint react rules](https://github.com/yannickcr/eslint-plugin-react)

# Notes
  - Be aware that certain packages are subject to updates and could potentially break this build. If this is the case you can either revert said packages to the version specified in the package.json file by removing the `^` from the version number or by trying to fix the errors caused by the update.

  - Not all linting errors will be caught by running the development/production scripts. They should however all be caught by Atom with relevant plugins.

  - I recommend the following community packages for atom:
    - [autocomplete-paths](https://atom.io/packages/autocomplete-paths)
    - [file-icons](https://atom.io/packages/file-icons)
    - [highlight-selected](https://atom.io/packages/highlight-selected)
    - [language-babel](https://atom.io/packages/language-babel)
    - [linter](https://atom.io/packages/linter)
    - [linter-eslint](https://atom.io/packages/linter-eslint)
    - [pigments](https://atom.io/packages/pigments)

  - Other cool community packages for atom:
    - [docblockr](https://atom.io/packages/docblockr)
    - [emmet](https://atom.io/packages/emmet)
    - [merge-conflicts](https://atom.io/packages/merge-conflicts)
    - [pretty-json](https://atom.io/packages/pretty-json)
    - [todo-show](https://atom.io/packages/todo-show)
