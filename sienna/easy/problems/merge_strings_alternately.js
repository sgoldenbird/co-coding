/* 
date: 2025-03-11
category: string
difficulty: easy 
source: LeetCode 75
number: 1768
link: https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
*/

const mergeAlternately = function (word1, word2) {
  let merged = "";
  let i = 0;

  while (i < word1.length && i < word2.length) {
    merged += word1[i] + word2[i];
    i++;
  }

  return merged + word1.slice(i) + word2.slice(i);
};

/* before improvement

const mergeAlternately = function(word1, word2) {
  let merged = "";
   const maxLength = Math.max(word1.length, word2.length);
   
   for (let i = 0; i < maxLength; i++) {
       if (i < word1.length) {
           merged += word1[i];
       }
       if (i < word2.length) {
           merged += word2[i];
       }
   }
   
   return merged;
   
};
*/
