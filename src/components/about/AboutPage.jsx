import React from 'react';

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
    <div>
      <h1>{ 'Pluralsight Admin' }</h1>
      <p>{ 'Lorem ipsum dolor sit amet. Banana apple juice.' }</p>
    </div>
  );
};

export default AboutPage;
