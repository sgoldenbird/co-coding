<!--
date: 2025-03-28
category: string, two pointers
difficulty: easy
source: LeetCode 75
number: 392
link: https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75
-->

# Follow up

Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109,
and you want to check one by one to see if t has its subsequence.
In this scenario, how would you change your code?

## 🚨 기존 코드의 한계

s와 t를 매번 처음부터 비교.그런데 k가 10억 개나 된다면? t가 너무 길면? 매번 비교하면 시간이 엄청 오래 걸린다.

```js
var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++;
    j++;
  }

  return i === s.length;
};
```

## 💡 최적화 전략: Preprocessing + Binary Search

t는 변하지 않으니, 처음에 한 번만 전처리(preprocessing)해서 t에서 각 알파벳이 등장하는 모든 인덱스를 기록한다.
그리고 s1 ~ sk는 그 전처리 데이터를 바탕으로 빠르게 subsequence 여부를 확인.

### 🔧 1. 전처리 단계 (t 기준)

t를 돌면서 각 문자마다 인덱스를 배열로 저장

```js
// 예: t = "ahbgdc"
// preprocessed = {
//   a: [0],
//   h: [1],
//   b: [2],
//   g: [3],
//   d: [4],
//   c: [5]
// }
```

```js
function preprocess(t) {
  const map = {};
  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!map[char]) map[char] = [];
    map[char].push(i);
  }
  return map;
}
```

### 🔧 2. subsequence 검사 단계 (s를 하나씩 돌며 t 안에서 인덱스 찾기)

각 문자를 binary search로 다음 인덱스를 빠르게 찾아야 함

```js
function isSubsequenceFast(s, tMap) {
  let prevIndex = -1;

  for (const char of s) {
    if (!tMap[char]) return false;

    // 이진 탐색으로 현재 char의 인덱스 중에서 prevIndex보다 큰 것 중 가장 작은 것 찾기
    const idxList = tMap[char];
    let left = 0,
      right = idxList.length - 1;
    let nextIndex = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (idxList[mid] > prevIndex) {
        nextIndex = idxList[mid];
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    if (nextIndex === -1) return false;
    prevIndex = nextIndex;
  }

  return true;
}
```

최종 사용 예시

```js
const t = "ahbgdc";
const tMap = preprocess(t);

console.log(isSubsequenceFast("abc", tMap)); // true
console.log(isSubsequenceFast("axc", tMap)); // false
```

## ✅ 시간 복잡도 비교

| 방법              | 시간 복잡도                               |
| ----------------- | ----------------------------------------- |
| 기존 방식         | O(k × (s.length + t.length))              |
| 전처리 + 이진탐색 | O(t.length + k × s.length × log t.length) |

👉 t가 고정이고 k가 매우 큰 경우에 압도적인 성능 차이 발생!
