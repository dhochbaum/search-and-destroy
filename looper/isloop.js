"use strict";

//Complete this algo
// const isLoop = linkedlist => {
//   let currentNode = linkedlist.head;
//   let history = [];

//   while (currentNode !== null) {
//     if (history.indexOf(currentNode) > -1) {
//       return true;
//     } else {
//       history.push(currentNode);
//       currentNode = currentNode.next;
//     }
//   }

//   return false;
// };

const isLoop = linkedlist => {
    let currentNode = linkedlist.head;
    let currentFastNode = linkedlist.head.next;
  
    while (!nullCheck(currentNode, currentFastNode)) {
      if (currentNode===currentFastNode) {
        return true;
      } else {
        currentNode = currentNode.next;
        currentFastNode = currentFastNode.next.next;
      }
    }
  
    return false;
};

function nullCheck(nodeOne, nodeTwo) {
    if(nodeOne.next===null) {
        return true;
    } else if (nodeTwo.next===null) {
        return true;
    } else if (nodeTwo.next.next===null) {
        return true;
    } else {
        return false;
    }
}

const findLoop = linkedlist => {
    let currentNode = linkedlist.head;
    let currentFastNode = linkedlist.head.next;
  
    while (!nullCheck(currentNode, currentFastNode)) {
      if (currentNode===currentFastNode) {
        let index = 0;
        let counterNode = linkedlist.head;
        while(counterNode!==currentNode) {
            index++;
            counterNode = counterNode.next;
        }
        return index;
      } else {
        currentNode = currentNode.next;
        currentFastNode = currentFastNode.next.next;
      }
    }
  
    return false;
};

// function findLoop() {
//   let currentNode = linkedlist.head;
//   let history = [];

//   while (currentNode !== null) {
//     if (history.indexOf(currentNode.value) > -1) {
//       return currentNode.value;
//     } else {
//       history.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//   }
//   return false;
// }

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = {isLoop, findLoop};
