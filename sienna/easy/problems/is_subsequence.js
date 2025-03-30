/* 
date: 2025-03-28
category: string, two pointers
difficulty: easy 
source: LeetCode 75
number: 392
link: https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75
*/
var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === s.length;
};
