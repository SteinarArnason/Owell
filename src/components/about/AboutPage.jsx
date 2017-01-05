import React, { PureComponent } from 'react';

import defaultStyles from 'global.css';

export default class AboutPage extends PureComponent {
  render() {
    return (
      <div className={ defaultStyles.pageContent }>
        <h1>{ 'Something about the author/page/company' }</h1>
        <p>{ 'No need for an autobiography, just a short and concise, to the point description.' }</p>
      </div>
    );
  }
}
