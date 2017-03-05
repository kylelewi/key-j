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

  render() {
    return (
      <section className="loop-index">
        <div className="selected-loop">
          <h1 onClick={() => this.props.selectedLoop.audio.play()}>
            {this.props.selectedLoop.name}
          </h1>
          <aside className="controls">
            <i
              className="fa fa-pause-circle"
              onClick={() => this.props.selectedLoop.audio.pause()}
                ></i>
            <i
              className="fa fa-play-circle"
              onClick={() => this.playLoop(this.props.selectedLoop.audio)}
                ></i>
            <i
                className="fa fa-stop-circle"
              onClick={() => this.props.selectedLoop.audio.stop()}
                ></i>
          </aside>
        </div>
        <div className="loop-library">
          <ul>
            {
              Object.keys(this.props.allLoops).map(id => this.props.allLoops[id]).map(loop => (
                <LoopIndexItem
                  loop={loop}
                  updateLoop={this.props.updateLoop.bind(this)}
                  key={loop.name} />
              ))

            }
          </ul>
        </div>
      </section>
    );
  }
}



export default LoopIndex;
