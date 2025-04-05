/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
  const frequencyMap = {}
  for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1
  }

  const occurenceSet = new Set()
  for (const count of Object.values(frequencyMap)) {
      if (occurenceSet.has(count)) {
          return false
      }
      occurenceSet.add(count)
  }

  return true
};