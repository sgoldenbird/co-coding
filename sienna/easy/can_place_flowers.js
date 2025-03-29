/* 
date: 2025-03-20
category: array
difficulty: easy 
source: LeetCode 75
number: 605
link: https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75
*/

var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      let prev = i === 0 || flowerbed[i - 1] === 0;
      let next = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      if (prev && next) {
        flowerbed[i] = 1;
        count++;

        if (count >= n) {
          return true;
        }
      }
    }
  }
  return count >= n;
};
