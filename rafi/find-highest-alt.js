/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {

  let highestAlt = 0
  let altitude = 0

  for (let i = 0; i < gain.length; i++) {
      altitude += gain[i]

      if (altitude > highestAlt) {
          highestAlt = altitude
      } 
  }
  
  return highestAlt
};