/* 
date: 2025-04-03
category: array, Set, (Map)
difficulty: easy 
source: LeetCode 75
number: 1207
link: https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75
*/
var uniqueOccurrences = function (arr) {
  const count = {};

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  const occurrences = Object.values(count); // Object.values(obj)는 객체의 모든 값들을 배열로 변환해요.
  const uniqueSet = new Set(occurrences);

  return occurrences.length === uniqueSet.size;
};

//----------------------------------------------------------------------------- 같은 문제를 Map으로 푼 버전

var uniqueOccurrencesMap = function (arr) {
  const countMap = new Map();

  for (let num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
    //set()은 Map 객체의 메서드: 새로운 키-값 쌍을 추가하거나 기존의 키에 대한 값을 업데이트 해요.
  }

  const occurrences = Array.from(countMap.values());
  //CountMap.values()는 Map 객체의 모든 값들을 반복 가능한 iterable로 반환해요. 키는 필요없고 값만 필요하니까 values()를 사용해요.
  //Array.from()은 iterable을 배열로 변환해요. (Map객체는 iterable이지만 일반 객체는 iterable이 아니에요.)

  const uniqueSet = new Set(occurrences);

  return occurrences.length === uniqueSet.size;
};
