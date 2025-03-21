/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
  var i = 0;
  var j = s.length - 1
  var word = s.split('')
  const vowels = 'AEIOUaeiou'

  while (i < j) {
      if (!vowels.includes(word[i])) {
          i++
      }

      if (!vowels.includes(word[j])) {
          j--
      }

      if (vowels.includes(word[i]) && vowels.includes(word[j])) {
          var temp = word[i]
          word[i] = word[j]
          word[j] = temp

          i++
          j--
      }
  }

  return word.join('')
};