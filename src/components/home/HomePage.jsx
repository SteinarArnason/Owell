import React, { PureComponent } from 'react';

import defaultStyles from 'global.css';
import styles from './HomePage.css';

export default class HomePage extends PureComponent {
  render() {
    return (
      <div className={ defaultStyles.pageContent }>
        <br />
        <img
          className={ styles.fixedImageHeight }
          src={ 'http://i.imgur.com/kVLyJ9c.jpg' }
          alt="boohoo" />
        <p>{ `That's how I feel about webpack...` }</p>
      </div>
    );
  }
}
