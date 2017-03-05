import React from 'react';
import {Howl, Howler} from 'howler';

class BeatsIndexItem extends React.Component {

  render() {
    return (
      <li onClick={() => this.props.updateBeat(this.props.beat)} >
        {this.props.beat.name}
      </li>
    );
  }
}

export default BeatsIndexItem;
