import React from 'react';

import defaultStyles from 'global.css';
import styles from './HomePage.css';

const HomePage = () => {
  const text = 'That\'s how I feel about webpack...';
  return (
    <div className={ defaultStyles.pageContent }>
      <br />
      <img
        className={ styles.fixedImageHeight }
        src={ 'http://i.imgur.com/kVLyJ9c.jpg' }
        alt="boohoo" />
      <p>{ text }</p>
    </div>
  );
};

export default HomePage;
