import { RECEIVE_BEATS, UPDATE_BEAT, UPDATE_TEMPO } from '../actions/beat_actions';
import merge from 'lodash/merge';
import Drums from '../util/drums';

const initialState = {
  allBeats: Drums,
  selectedBeat: {}
};

const BeatsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_BEATS:
      return merge(newState, action.beats);
    case UPDATE_BEAT:
      return merge(newState, {selectedBeat: action.beat});
    default:
      return state;
    }
};

export default BeatsReducer;
