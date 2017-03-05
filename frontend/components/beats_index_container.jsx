import { connect } from 'react-redux';
import BeatsIndex from './beats_index';
import { receiveBeats, updateBeat } from '../actions/beat_actions';

const mapStateToProps = state => {
  return {
    allBeats: state.beats.allBeats,
    selectedBeat: state.beats.selectedBeat,
    tempo: state.tempo.bpm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateBeat: beat => dispatch(updateBeat(beat)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeatsIndex);
