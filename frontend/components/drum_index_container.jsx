import { connect } from 'react-redux';
import LoopIndex from './loop_index';
import { receiveDrums, updateDrum } from '../actions/drum_actions';

const mapStateToProps = state => {
  return {
    allLoops: state.drums.allDrums,
    selectedLoop: state.drums.selectedDrum,
    tempo: state.tempo.bpm,
    section: "Drums"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLoop: drum => dispatch(updateDrum(drum))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoopIndex);
