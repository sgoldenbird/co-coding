/* 
date: 2025-03-20
category: array, two pointers
difficulty: easy 
source: LeetCode 75
number: 283
link: https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75
*/
var moveZeroes = function (nums) {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }

  return nums;
};
