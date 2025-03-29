/* 
date: 2025-03-20
category: string
difficulty: easy 
source: LeetCode 75
number: 345
link: https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75
*/

var reverseVowels = function (string) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let arr = string.split("");
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (!vowels.has(arr[left])) {
      left++;
    } else if (!vowels.has(arr[right])) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }

  return arr.join("");
};
