import React from 'react';
import { render } from 'react-dom';
import  Mosaic  from './imageMosaic/Mosaic';

export default class App extends React.Component {
  constructor() {
    super();
}
  render() {
    return (
      <div>
        <Mosaic/>
      </div>
    );
  }
}

