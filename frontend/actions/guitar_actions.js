export const RECEIVE_GUITARS = "RECEIVE_GUITARS";
export const UPDATE_GUITAR = "UPDATE_GUITAR";

export const receiveGuitars = guitars => ({
  type: RECEIVE_GUITARS,
  guitars
});

export const updateGuitar = guitar => ({
  type: UPDATE_GUITAR,
  guitar
});
