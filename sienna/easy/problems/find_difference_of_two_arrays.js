/* 
date: 2025-04-03
category: array, Set
difficulty: easy 
source: LeetCode 75
number: 2215
link: https://leetcode.com/problems/find-the-difference-of-two-arrays/description/?envType=study-plan-v2&envId=leetcode-75
*/
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const onlyInNums1 = [...set1].filter((num) => !set2.has(num));
  const onlyInNums2 = [...set2].filter((num) => !set1.has(num));

  return [onlyInNums1, onlyInNums2];
};
