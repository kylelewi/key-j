export const objToArray = object => {
  return Object.keys(object).map(id => object[id]);
};
