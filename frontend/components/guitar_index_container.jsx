import { connect } from 'react-redux';
import LoopIndex from './loop_index';
import { receiveGuitars, updateGuitar } from '../actions/guitar_actions';
import { updateTempo } from '../actions/tempo_actions';

const mapStateToProps = state => {
  return {
    allLoops: state.guitars.allGuitars,
    selectedLoop: state.guitars.selectedGuitar,
    tempo: state.tempo.bpm,
    section: "Guitar"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLoop: guitar => dispatch(updateGuitar(guitar)),
    updateTempo: bpm => dispatch(updateTempo(bpm))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoopIndex);
