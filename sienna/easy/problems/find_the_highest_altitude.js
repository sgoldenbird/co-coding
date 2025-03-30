/* 
date: 2025-03-28
category: array, prefix sum
difficulty: easy 
source: LeetCode 75
number: 1732
link: https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75
*/

var largestAltitude = function (gain) {
  let max = 0;
  let current = 0;

  for (let i = 0; i < gain.length; i++) {
    current += gain[i];
    max = Math.max(max, current);
  }

  return max;
};
