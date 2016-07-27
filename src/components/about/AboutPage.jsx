import React from 'react';

import defaultStyles from 'global.css';

// Example way of doing it with/without stateless component
/* class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Pluralsight Admin</h1>
        <p>Lorem ipsum dolor sit amet. Banana apple juice.</p>
      </div>
    );
  }
}*/

// This is stateless
const AboutPage = () => {
  return (
    <div className={ defaultStyles.pageContent }>
      <h1>{ 'Something about the author/page/company' }</h1>
      <p>{ 'No need for an autobiography, just a short and concise, to the point description.' }</p>
    </div>
  );
};

export default AboutPage;
