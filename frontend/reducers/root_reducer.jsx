import { combineReducers } from 'redux';
import DrumReducer from './drum_reducer';
import GuitarReducer from './guitar_reducer';
import TempoReducer from './tempo_reducer';

const rootReducer = combineReducers({
  drums: DrumReducer,
  guitars: GuitarReducer,
  tempo: TempoReducer
});

export default rootReducer;
