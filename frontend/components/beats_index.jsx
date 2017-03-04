import React from 'react';
import {Howl, Howler} from 'howler';
import BeatsIndexItem from './beats_index_item';

const allBeats = {
   a: {
     name: "80s Back Beat",
     audio: new Howl({
       src: ['beats/80s_back_beat.m4a'],
       autoplay: false,
       loop: true
     })
   },
   b: {
     name: "City Nights Beat",
     audio: new Howl({
       src: ['beats/city_nights_beat.m4a'],
       loop: true
     })
   },
   c: {
     name: "Under Pressure Beat",
     audio: new Howl({
       src: ['beats/under_pressure_beat.m4a'],
       loop: true
     })
   },
   d: {
     name: "Rise Up Beat",
     audio: new Howl({
       src: ['beats/rise_up_beat.m4a'],
       loop: true
     })
   },
   e: {
     name: "Regrets Beat",
     audio: new Howl({
       src: ['beats/regrets_beat.m4a'],
       loop: true
     })
   },
   f: {
     name: "Raindrops Beat",
     audio: new Howl({
       src: ['beats/raindrops_beat.m4a'],
       loop: true
     })
   },
   g: {
     name: "Pastel Colors Beat",
     audio: new Howl({
       src: ['beats/pastel_colors_beat.m4a'],
       loop: true
     })
   },
   h: {
     name: "Matchbox Beat",
     audio: new Howl({
       src: ['beats/matchbox_beat.m4a'],
       loop: true
     })
   },
   i: {
     name: "Marathon Train Beat",
     audio: new Howl({
       src: ['beats/marathon_train_beat.m4a'],
       loop: true
     })
   },
   j: {
     name: "Billie Jean",
     audio: new Howl({
       src: ['beats/billie_jean.m4a'],
       loop: true
     })
   }
};

allBeats.a.audio.loop = true;

class BeatsIndex extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.updateSelectedBeat = this.updateSelectedBeat.bind(this);
    this.playBeat = this.playBeat.bind(this);
  }

  componentWillUpdate() {
    if (Object.keys(this.state).length !== 0) {
      this.state.audio.stop();
    }
  }

  updateSelectedBeat(beat) {
    this.setState(beat);
  }

  playBeat(beat) {
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
          <h1 onClick={() => this.state.audio.rate(0.9).play()}>{this.state.name}</h1>
          <aside className="controls">
            <i
              className="fa fa-pause-circle"
              onClick={() => this.state.audio.pause()}
                ></i>
            <i
              className="fa fa-play-circle"
              onClick={() => this.playBeat(this.state.audio)}
                ></i>
            <i
                className="fa fa-stop-circle"
              onClick={() => this.state.audio.stop()}
                ></i>
          </aside>
        </div>
        <div className="beats-library">
          <ul>
            {
              Object.keys(allBeats).map(id => allBeats[id]).map(beat => (
                <BeatsIndexItem
                  key={beat.name}
                  beat={beat}
                  updateSelectedBeat={this.updateSelectedBeat} />
              ))
            }
          </ul>
        </div>
      </section>
    );
  }
}

export default BeatsIndex;
