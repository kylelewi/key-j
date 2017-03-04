import { RECEIVE_BEATS } from '../actions/beat_actions';
import merge from 'lodash/merge';

const initialState = {
  allBeats: {},
  selectedBeat: null
};

const BeatsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_BEATS:
      return merge({}, state.allBeats, action.beats);
    }
};
