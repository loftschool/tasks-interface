export const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];
const isEven = (num) => {
  return num % 2 === 0;
};

const filterArray = (array, filterFn) => {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    if (filterFn(currentItem)) {
      filteredArray.push(currentItem);
    }
  }

  return filteredArray;
};

export const result = filterArray(mixedArray, isEven);
