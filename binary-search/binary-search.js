"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  let begin = 0;
  let end = array.length - 1;
  let mid = Math.floor((end + begin) / 2);

  while (begin !== end) {
    if (array[mid] === target) {
      return true;
    } else if (target < array[mid]) {
      end = mid - 1;
      mid = Math.floor((end + begin) / 2);
    } else {
      begin = mid + 1;
      mid = Math.floor((end + begin) / 2);
    }
  }

  if (array[mid] === target) {
    return true;
  }
  return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
