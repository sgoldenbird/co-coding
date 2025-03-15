/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let alternate = ''
  let words1 = word1.split('')
  let words2 = word2.split('')

  let i = 0
  let j = 0
  while (i < words1.length && j < words2.length) {
      alternate += words1[i] + words2[j]
      i++
      j++
  }

  if (i < words1.length) {
      alternate += words1.join("").slice(i, words1.length)
  }

  if (j < words2.length) {
      alternate += words2.join("").slice(j, words2.length)
  }

  return alternate
};