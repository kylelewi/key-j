import { RECEIVE_GUITARS, UPDATE_GUITAR } from '../actions/guitar_actions';
import merge from 'lodash/merge';
import Guitars from '../util/guitars';

const initialState = {
  allGuitars: Guitars,
  selectedGuitar: {}
};

const GuitarReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_GUITARS:
      return merge(newState, action.guitars);
    case UPDATE_GUITAR:
      return merge(newState, { selectedGuitar: action.guitar });
    default:
      return state;
  }
};

export default GuitarReducer;
