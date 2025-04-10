/* 
date: 2025-03-11
category: string
difficulty: easy 
source: LeetCode 75
number: 1431
link:https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75
*/

const kidsWithCandies = function (candies, extraCandies) {
  const maxCandies = Math.max(...candies);

  return candies.map((candy) => candy + extraCandies >= maxCandies);
};
