/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

  const maxCandy = candies.reduce((max, current) => current > max ? current : max, candies[0])

  return candies.map(candy => candy + extraCandies >= maxCandy)
};