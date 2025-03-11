/* 
date: 2025-03-11
category: string
difficulty: easy 
source: LeetCode 75
number: 1431
link:https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75
*/

const kidsWithCandies = function (candies, extraCandies) {
  /* 
  먼저, 모든 아이들 중 최대 사탕 개수를 구합니다. 스프레드 연산자는 배열의 각 요소들을 개별 인수로 분리해서 함수에 전달할 수 있도록 합니다. 
  
  const candies = [2, 3, 5, 1, 3];
  const maxCandies = Math.max(...candies); 
  -------------------------------------------------------------
  const maxCandies = Math.max(2, 3, 5, 1, 3); 는 같은 코드 입니다. 
  */

  const maxCandies = Math.max(...candies);

  /* 
  각 아이에게 extraCandies를 더했을 때 최대 사탕 개수 이상이면 true, 아니면 false를 반환합니다.

  map은 배열의 내장 메서드로 배열의 각 요소를 순회하면서 지정한 화살표 함수를 실행하고, 그 결과들로 새로운 배열을 만들어 반환합니다.

  계산한 값이 maxCandies보다 크거나 같은지 비교합니다.비교 결과는 true 또는 false로 평가됩니다.
  map은 각 요소에 대해 계산한 true 또는 false 값을 모아 새로운 배열을 만듭니다. [true, true, true, false, true] 같이. 

  */
  return candies.map((candy) => candy + extraCandies >= maxCandies);
};
