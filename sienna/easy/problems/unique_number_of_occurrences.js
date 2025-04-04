/* 
date: 2025-04-03
category: array, Set, (Map)
difficulty: easy 
source: LeetCode 75
number: 1207
link: https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75
*/
var uniqueOccurrences = function (arr) {
  const count = {};

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  const occurrences = Object.values(count);
  const uniqueSet = new Set(occurrences);

  return occurrences.length === uniqueSet.size;
};
