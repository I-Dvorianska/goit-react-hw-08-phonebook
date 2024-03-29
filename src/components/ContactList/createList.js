export function createList(array) {
  let size = 10;
  let subarray = [];

  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    subarray[i] = array.slice(i * size, i * size + size);
  }

  return subarray;
}
