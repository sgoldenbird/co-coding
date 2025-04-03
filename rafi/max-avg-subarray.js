/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
  let windowSum = 0
  let maxAverage = 0

  for (let i = 0; i < k; i++) {
      windowSum += nums[i]
  }
  
  maxAverage = windowSum / k

  for (let i = k; i < nums.length; i++) {
      windowSum += nums[i] - nums[i-k]
      
      let localAverage = windowSum / k
      if (localAverage > maxAverage) {
          maxAverage = localAverage
      }
  }

  return maxAverage
};