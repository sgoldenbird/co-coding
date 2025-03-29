/* 
date: 2025-03-20
category: array
difficulty: easy 
source: LeetCode 75
number: 283
link: https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75
*/
var moveZeroes = function (nums) {
  let left = 0; // 0이 아닌 값을 놓을 위치 (왼쪽에 놓을거니까)

  for (let right = 0; right < nums.length; right++) {
    // right은 배열을 순회하면서 현재 요소가 0이 아닌지를 확인하는 포인터

    if (nums[right] !== 0) {
      // 현재 right 위치에 있는 값이 0이 아니라면

      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
};
