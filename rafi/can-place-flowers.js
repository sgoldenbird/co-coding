/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
      if (n == 0) {
          break;
      }
      
      if(flowerbed[i] == 0 && n > 0) {
          if ((i == 0 || flowerbed[i-1] == 0) && (i == flowerbed.length-1 || flowerbed[i+1] == 0)) {
              flowerbed[i] = 1
              n = n - 1
          }
      }
  }

  return n == 0
};