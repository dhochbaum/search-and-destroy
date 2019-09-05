"use strict";

// Complete this algo
const minJumps2 = arr => {
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




const minJumps = arr => {
  let jumpsToEnd = new Array(arr.length);
  jumpsToEnd[arr.length-1] = 0;


  for(let i=arr.length-2; i>=0; i--) {

    //let possibleNextJumpAmounts = jumpsToEnd.slice(i+1, i+arr[i]+1);

    //jumpsToEnd[i] = Math.min(...possibleNextJumpAmounts)+1;
    jumpsToEnd[i] = Math.min(...jumpsToEnd.slice(i+1, i+arr[i]+1))+1;
  }

  return jumpsToEnd[0];
}


module.exports = minJumps;