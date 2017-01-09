# Boilerplate

## Table of contents

  - 1 [Prerequisites](#prerequisites)
  - 2 [Project Structure](#structure)
  - 3 [Usage](#usage)
      - 3.1 [Development](#development)
      - 3.2 [Production](#production)
  - 4 [Helpful Links](#helpful)
  - 5 [Notes](#notes)
  - 6 [Clean Project](#clean)
  - 7 [Special Thanks](#specialthanks)

### Prerequisites for running this project <a name="prerequisites"></a>
  This project has been tested on Linux Mint and Windows 10 using the following versions without any errors. Newer versions are also likely to work but you can always fallback to the version number specified.

  - [NodeJS (v4.4.5)](https://nodejs.org)

  - npm (v2.15.5) installed automatically with [NodeJS](https://nodejs.org)

  - [Atom text editor](https://atom.io/) (see reccomended packages in the Notes section) or another text editor of your choice.

  - Run the following command
```
-> npm install
```
or alternatively (reccomended)
```
-> yarn install
```

### What it includes <a name="structure"></a>
 - [React](https://facebook.github.io/react/docs/getting-started.html)
 - [Redux](http://redux.js.org/index.html)
 - [ImmutableJS](https://facebook.github.io/immutable-js/)
 - [Webpack](http://webpack.github.io/docs/)
 - [Jest](https://facebook.github.io/jest/) & [Enzyme](https://github.com/airbnb/enzyme/tree/master/docs)
 - [Babel](https://babeljs.io/) with ES6 & ES7 support
 - [Axios](https://www.npmjs.com/package/axios) or [Superagent](https://www.npmjs.com/package/superagent) for HTTP requests
 - Hot reloading in development

### Usage <a name="usage"></a>
#### Development <a name="development"></a>
  There are two separate scripts used in development.
```
-> npm run jest:watch
```
  * This is used while in TDD, only runs unit tests defined. Does not launch the application nor build it with webpack.
  * Jest picks up on all files with `.test.` or `.spec.` in their filename and everything inside any `__tests__` folder, regardless of filename.
```
-> npm start
```
  * This is used to view the site in the browser with access to development tools like the Redux Dock and source map for chrome. This also opens up to `localhost:3000` in chrome.
    * Runs the Linter and Jest once.
    * To toggle the Redux Dock use `ctrl+h`, to move them around use `ctrl+q`.

#### Production <a name="production"></a>
  When running the production build script the contents of the `/src` folder will be minimized and put into a `/dist` folder. All javascript files will be bundled into one file. All the other files needed to server the website will also be moved to the `/dist` folder. Any `console.log` statements should also be quashed.

  Finally it opens up to `localhost:3000` in chrome with the minified version.
```
-> npm run build
```

### Other helpful links <a name="helpful"></a>
  - [React Component lifecycles](https://facebook.github.io/react/docs/component-specs.html "Specifications and Lifecycles")
  - [Redux Api](http://redux.js.org/docs/api/)
  - [Immutable Api](https://facebook.github.io/immutable-js/docs/#/)
  - [Jest Api](https://facebook.github.io/jest/docs/api.html)
  - [ESLint general rules](http://eslint.org/docs/rules/)
  - [ESLint react rules](https://github.com/yannickcr/eslint-plugin-react)

### Notes <a name="notes"></a>
  - Be aware that certain packages are subject to updates and could potentially break this build. If this is the case you can either revert said packages to the version specified in the `package.json` file by removing the `^` from the version number or by trying to fix the errors caused by the update.

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

### Starting a new project <a name="clean"></a>

  This boilerplate includes some basic implementations of `components`/`actions`/`reducers`/`api`/`selectors` and a hierarchy tree.
  If you wish to clean up the project here's how to do it:

  * `src/actions`: delete all files.
  * `src/api`: delete all files or the folder if the project wont be using any external api for communication.
  * `src/components`: everything but the `App.jsx` file. And in that file:
    * remove user defined modules/files imports and their references.
    * replace `{ this.props.children }` with something like `<p>Hello world</p>` for some output.
    * remove the `children` prop from propTypes.
  * `src/selectors`: delete all files.
  * `src/reducers`: delete all files except `index.js` and from that file remove the imports/references from user defined modules/files.
  * `src/global.css`: you can safely remove everything here except maybe the import at the top (unless you don't want a `variables.css` file). If you don't want to use global css then:
    * remove the file.
    * remove `src/variables.css` if you wont be using it in your project.
    * remove the import in `src/index.jsx` that references `global.css`.
  * `src/reduxConstants.js`: change the export to: `export default createConstants({})`.
  * `src/routes.jsx`: remove all user defined modules/files and their references except the `App` one.
  * `src/variables.jsx`: remove the Miscellaneous variable and change the comments to whatever you want. Or remove the file if it won't be used.
  * `package.json`: If you won't be doing any http requests you can remove both `axios` and `superagent` from the dependencies. However, if you will be doing them then I suggest removing one and using the other.

  If you want a clean project with a different structure then you can follow the above guide and setup your own hierarchy.

  For more advanced removals (such as removing redux) you are on your own.

### Special thanks <a name="specialthanks"></a>
  The project is largely based on a course by Cory House on [Pluralsight](https://www.pluralsight.com/courses/react-redux-react-router-es6 "Building Applications with React and Redux in ES6") so be sure to check it out.
