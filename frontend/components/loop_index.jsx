import React from 'react';
import {Howl, Howler} from 'howler';
import LoopIndexItem from './loop_index_item';

class LoopIndex extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.playLoop = this.playLoop.bind(this);
  }

  componentWillUpdate() {
    if (Object.keys(this.state).length !== 0) {
      this.state.audio.stop();
    }
    if (Object.keys(this.props.selectedLoop).length > 0 && !(isNaN(this.props.tempo))) {
      this.props.selectedLoop.audio.rate(
        this.props.tempo / this.props.selectedLoop.bpm
      );
    }
  }

  playLoop(loop) {
    Object.keys(this.props.allLoops).map(id => this.props.allLoops[id]).forEach(loop => {
      loop.audio.stop();
    });
    if (loop.paused) {
      loop.play();
    } else {
      loop.stop();
      loop.play();
    }
  }

  isSelected(loop) {
    if (loop.name === this.props.selectedLoop.name) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <section className="loop-index group">
        <div className="loop-library group">
          <div className="section-title">
            {this.props.section}
          </div>
          <ul className="loop-ul group">
            {
              Object.keys(this.props.allLoops).map(id => this.props.allLoops[id]).map(loop => (
                <LoopIndexItem
                  loop={loop}
                  updateLoop={this.props.updateLoop.bind(this)}
                  key={loop.name}
                  selected={this.isSelected(loop)}
                  />
              ))

            }
          </ul>
        </div>
      </section>
    );
  }
}



export default LoopIndex;
