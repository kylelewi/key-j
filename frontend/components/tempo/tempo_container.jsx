import { connect } from 'react-redux';
import Tempo from './tempo';
import { updateTempo } from '../../actions/tempo_actions';

const mapStateToProps = state => {
  return {
    tempo: state.tempo.bpm,
    selectedBeat: state.beats.selectedBeat
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTempo: bpm => dispatch(updateTempo(bpm))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tempo);
