import React from 'react';
import {Howl, Howler} from 'howler';
import BeatsIndexItem from './beats_index_item';

class BeatsIndex extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.playBeat = this.playBeat.bind(this);
  }

  componentWillUpdate() {
    if (Object.keys(this.state).length !== 0) {
      this.state.audio.stop();
    }
    if (Object.keys(this.props.selectedBeat).length > 0 && !(isNaN(this.props.tempo))) {
      this.props.selectedBeat.audio.rate(
        this.props.tempo / this.props.selectedBeat.bpm
      );
    }
  }

  playBeat(beat) {
    Object.keys(this.props.allBeats).map(id => this.props.allBeats[id]).forEach(beat => {
      beat.audio.stop();
    });
    if (beat.paused) {
      beat.play();
    } else {
      beat.stop();
      beat.play();
    }
  }

  render() {
    return (
      <section className="beats-index">
        <div className="selected-beat">
          <h1 onClick={() => this.props.selectedBeat.audio.play()}>
            {this.props.selectedBeat.name}
          </h1>
          <aside className="controls">
            <i
              className="fa fa-pause-circle"
              onClick={() => this.props.selectedBeat.audio.pause()}
                ></i>
            <i
              className="fa fa-play-circle"
              onClick={() => this.playBeat(this.props.selectedBeat.audio)}
                ></i>
            <i
                className="fa fa-stop-circle"
              onClick={() => this.props.selectedBeat.audio.stop()}
                ></i>
          </aside>
        </div>
        <div className="beats-library">
          <ul>
            {
              Object.keys(this.props.allBeats).map(id => this.props.allBeats[id]).map(beat => (
                <BeatsIndexItem
                  beat={beat}
                  updateBeat={this.props.updateBeat.bind(this)}
                  key={beat.name} />
              ))

            }
          </ul>
        </div>
      </section>
    );
  }
}



export default BeatsIndex;
