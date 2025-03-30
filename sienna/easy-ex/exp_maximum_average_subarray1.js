/* 
date: 2025-03-28
category: 
difficulty: easy 
source: LeetCode 75
number: 643
link: https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75
*/

var findMaxAverage = function (nums, k) {
  // 처음 k개의 합
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let maxSum = sum;

  // 슬라이딩 윈도우 시작
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i]; // 윈도우 이동
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
};
