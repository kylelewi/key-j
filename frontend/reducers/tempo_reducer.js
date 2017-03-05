import { UPDATE_TEMPO } from '../actions/tempo_actions';
import merge from 'lodash/merge';

const initialState = {
  bpm: 100
};

const TempoReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case UPDATE_TEMPO:
      return merge(newState, {bpm: action.bpm});
    default:
      return state;
  }
};

export default TempoReducer;
