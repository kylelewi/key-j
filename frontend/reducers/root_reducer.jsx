import { combineReducers } from 'redux';
import BeatsReducer from './beats_reducer';
import TempoReducer from './tempo_reducer';

const rootReducer = combineReducers({
  beats: BeatsReducer,
  tempo: TempoReducer
});

export default rootReducer;
