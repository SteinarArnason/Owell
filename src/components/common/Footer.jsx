import React, { PureComponent } from 'react';

import styles from 'global.css';

export default class Footer extends PureComponent {
  render() {
    return (
      <div className={ styles.pageFooter }>
        { 'Footer for the page' }
      </div>
    );
  }
}
