/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
  let source = s.split("")
  let target = t.split("")

  let i = 0
  let j = 0

  while (j < target.length) {
      
      if (source[i] === target[j]) {
          i++
      } else if (i === source.length) {
          break
      }

      j++
  }

  return i === source.length
};