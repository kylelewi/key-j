export const RECEIVE_BEATS = "RECEIVE_BEATS";
export const UPDATE_BEAT = "UPDATE_BEAT";

export const receiveBeats = beats => ({
  type: RECEIVE_BEATS,
  beats
});

export const updateBeat = beat => ({
  type: UPDATE_BEAT,
  beat
});
