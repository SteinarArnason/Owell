import React from 'react';

import defaultStyles from 'global.css';

// Examples of how to declare components.
// Hmr fails and reloads the page using the latter two implementations.
// So if you need hmr to work here please use the first implementation.

/* class AboutPage extends React.Component {
  render() {
    return (
      <div className={ defaultStyles.pageContent }>
        <h1>{ 'Something about the author/page/company' }</h1>
        <p>{ 'No need for an autobiography, just a short and concise, to the point description.' }</p>
      </div>
    );
  }
}*/

/* class AboutPage extends React.PureComponent {
  render() {
    return (
      <div className={ defaultStyles.pageContent }>
        <h1>{ 'Something about the author/page/company' }</h1>
        <p>{ 'No need for an autobiography, just a short and concise, to the point description.' }</p>
      </div>
    );
  }
}*/

const AboutPage = () => {
  return (
    <div className={ defaultStyles.pageContent }>
      <h1>{ 'Something about the author/page/company' }</h1>
      <p>{ 'No need for an autobiography, just a short and concise, to the point description.' }</p>
    </div>
  );
};

export default AboutPage;
