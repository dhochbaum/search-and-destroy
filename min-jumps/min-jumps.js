"use strict";

// Complete this algo
const minJumps = arr => {
  let jumps = 0;
  let indices = [arr.length - 1];

  while (!indices.includes(0)) {
    let newIndices = [];
    jumps++;
    for (let i = 0; i < indices.length; i++) {
      newIndices = newIndices.concat(oneJump(arr, indices[i]));
    }
    indices = newIndices;
  }
  return jumps;
};

const oneJump = (arr, index) => {
  let output = [];
  for (let i = 0; i < index; i++) {
    if (i + arr[i] >= index) {
      output.push(i);
    }
  }
  return output;
};

module.exports = minJumps;
