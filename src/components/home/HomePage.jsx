import React from 'react';

const HomePage = () => {
  const text = 'That\'s how I feel about webpack...';

  return (
    <div>
      <br />
      <img
        className="image"
        src={ 'http://i.imgur.com/kVLyJ9c.jpg' }
        alt="boohoo" />
      <p>{ text }</p>
    </div>
  );
};

export default HomePage;
