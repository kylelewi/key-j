import React from 'react';
import { objToArray } from '../../util/selectors';

class Tempo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bpm: null };
    this.playLoops = this.playLoops.bind(this);
    this.stopLoops = this.stopLoops.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.selectedDrum.name !== this.props.selectedDrum.name) {
      this.setState({bpm: newProps.selectedDrum.bpm});
      this.props.updateTempo(newProps.selectedDrum.bpm);
    }
  }

  componentWillUpdate() {
    if (this.state.bpm !== this.props.tempo) {
      this.props.updateTempo(parseInt(this.state.bpm));
    }
    window.tempo = this.props.tempo;
  }

  changeTempo(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  playLoops() {
    this.stopLoops();
    if (objToArray(this.props.selectedDrum).length > 0) {
      this.props.selectedDrum.audio.rate(
        this.props.tempo / this.props.selectedDrum.bpm).play();
    }
    if (objToArray(this.props.selectedGuitar).length > 0) {
      this.props.selectedGuitar.audio.rate(
        this.props.tempo / this.props.selectedGuitar.bpm).play();
    }
  }

  stopLoops() {
    objToArray(this.props.allDrums).forEach(drum => {
      drum.audio.stop();
    });
    objToArray(this.props.allGuitars).forEach(guitar => {
      guitar.audio.stop();
    });
  }

  render() {
    return (
      <div className="metronome-wrapper">
        <div className="metronome group">
          <figure className="metronome-left">
            <h2>TEMPO</h2>
            <input
              type="range"
              max="160"
              min="60"
              onChange={this.changeTempo('bpm')} />
          </figure>
          <figure className="metronome-right">
            <i
              className="fa fa-play-circle"
              onClick={this.playLoops}
                ></i>
            <i
                className="fa fa-stop-circle"
              onClick={this.stopLoops}
                ></i>
          </figure>
        </div>
      </div>
    );
  }
}

export default Tempo;
