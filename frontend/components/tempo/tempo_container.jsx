import { connect } from 'react-redux';
import Tempo from './tempo';
import { updateTempo } from '../../actions/tempo_actions';

const mapStateToProps = state => {
  return {
    tempo: state.tempo.bpm,
    allDrums: state.drums.allDrums,
    allGuitars: state.guitars.allGuitars,
    selectedDrum: state.drums.selectedDrum,
    selectedGuitar: state.guitars.selectedGuitar
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
