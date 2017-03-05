import { RECEIVE_DRUMS, UPDATE_DRUM } from '../actions/drum_actions';
import merge from 'lodash/merge';
import Drums from '../util/drums';

const initialState = {
  allDrums: Drums,
  selectedDrum: {}
};

const DrumReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_DRUMS:
      return merge(newState, action.drums);
    case UPDATE_DRUM:
      return merge(newState, {selectedDrum: action.drum});
    default:
      return state;
    }
};

export default DrumReducer;
