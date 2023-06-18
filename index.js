// index.js

function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - 42);
  }
  
  function distanceFromHqInFeet(blockNumber) {
    const blocks = distanceFromHqInBlocks(blockNumber);
    return blocks * 264; // Assuming 1 block is equal to 264 feet
  }
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(endBlock - startBlock);
    return blocks * 264; // Assuming 1 block is equal to 264 feet
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distance <= 400) {
      return 0; // Free sample
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // Flat fare of $25 for distances over 2000 feet
    } else {
      return 'cannot travel that far'; // Rides over 2500 feet are not allowed
    }
  }
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  // Code your solution in this file!
