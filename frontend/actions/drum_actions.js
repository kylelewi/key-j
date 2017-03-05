export const RECEIVE_DRUMS = "RECEIVE_DRUMS";
export const UPDATE_DRUM = "UPDATE_DRUM";

export const receiveDrums = drums => ({
  type: RECEIVE_DRUMS,
  drums
});

export const updateDrum = drum => ({
  type: UPDATE_DRUM,
  drum
});
