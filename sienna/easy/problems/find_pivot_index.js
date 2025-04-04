/* 
date: 2025-04-03
category: array
difficulty: easy 
source: LeetCode 75
number: 724
link: https://leetcode.com/problems/find-pivot-index/description/?envType=study-plan-v2&envId=leetcode-75
*/
var pivotIndex = function (nums) {
  let totalSum = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let rightSum = totalSum - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
};
