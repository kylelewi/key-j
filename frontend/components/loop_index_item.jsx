import React from 'react';
import {Howl, Howler} from 'howler';

class LoopIndexItem extends React.Component {
  selectLoop() {
    this.props.updateLoop(this.props.loop);
    this.props.updateTempo(this.props.loop.bpm);
  }

  render() {
    return (
      <li
        className={this.props.selected ? "selected" : ""}
        onClick={this.selectLoop.bind(this)}>
        {this.props.loop.name}
      </li>
    );
  }
}

export default LoopIndexItem;
