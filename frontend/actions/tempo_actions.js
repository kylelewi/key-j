export const UPDATE_TEMPO = "UPDATE_TEMPO";

export const updateTempo = bpm => {
  return {
    type: UPDATE_TEMPO,
    bpm
  };
};
