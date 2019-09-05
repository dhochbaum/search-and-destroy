"use strict";

//Complete this algo
const isLoop = linkedlist => {
  let currentNode = linkedlist.head;
  let history = [];

  while (currentNode !== null) {
    if (history.indexOf(currentNode.value) > -1) {
      return true;
    } else {
      history.push(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  return false;
};

function findLoop() {
  let currentNode = linkedlist.head;
  let history = [];

  while (currentNode !== null) {
    if (history.indexOf(currentNode.value) > -1) {
      return currentNode.value;
    } else {
      history.push(currentNode.value);
      currentNode = currentNode.next;
    }
  }
  return false;
}

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
