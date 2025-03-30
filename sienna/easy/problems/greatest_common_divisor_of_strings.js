/* 
date: 2025-03-11
category: string
difficulty: easy 
source: LeetCode 75
number: 1071
link: https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75
*/

const gcdOfStrings = function (str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const gcdLength = gcd(str1.length, str2.length);

  return str1.substring(0, gcdLength);
};
