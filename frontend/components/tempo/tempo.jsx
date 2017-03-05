import React from 'react';

class Tempo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bpm: null };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.selectedBeat.name !== this.props.selectedBeat.name) {
      this.setState({bpm: newProps.selectedBeat.bpm});
      this.props.updateTempo(newProps.selectedBeat.bpm);
    }
  }

  componentWillUpdate() {
    if (this.state.bpm !== this.props.tempo) {
      this.props.updateTempo(parseInt(this.state.bpm));
    }
  }

  changeTempo(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
      <figure className="metronome">
        <h2>Tempo</h2>
        <input
          type="range"
          max="160"
          min="60"
          onChange={this.changeTempo('bpm')} />
      </figure>
    );
  }
}

export default Tempo;
