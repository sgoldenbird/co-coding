<!--
date: 2025-04-11
category: linked list, (two pointers), recursion
difficulty: easy
source: LeetCode 75
number: 206
link: https://leetcode.com/problems/reverse-linked-list/?envType=study-plan-v2&envId=leetcode-75
-->

# 재귀적 방법으로 풀이

```js
var reverseList = function (head) {
  // 종료 조건 (base case)
  if (head === null || head.next === null) {
    // 리스트가 비어 있거나, 노드가 하나뿐이면 그냥 반환
    return head;
  }

  // head 다음 노드부터 끝까지 뒤집은 결과
  const newHead = reverseList(head.next);

  // 방향을 바꿔주는 핵심 코드
  head.next.next = head;
  head.next = null;

  return newHead;
};
```

## 보충 설명

재귀에는 두 가지 흐름이 있다:

- 깊이 들어가는 단계 (go down) → reverseList(head.next)로 계속 호출해서 리스트 끝까지 들어감
- 되돌아오는 단계 (go back) → 반환되면서 그제야 head.next.next = head 같은 코드가 실행됨

예시

```js
let node3 = { val: 3, next: null };
let node2 = { val: 2, next: node3 };
let node1 = { val: 1, next: node2 };

let head = node1;
```

그럼 구조는 이렇게 된다. `head = 1 → 2 → 3 → null`

### ✅ 1단계: 깊이 들어가기

```js
reverseList(1)
  → reverseList(2)
      → reverseList(3)
          → head.next === null → return 3
```

여기까지는 아무 작업도 안 하고 그냥 계속 함수만 콜한다.

**🕯️햇갈릴 수 있는 부분**
return은 reverseList(3) 함수 안에서 일어난 일. 그걸 호출한 함수 (reverseList(2))는 아직 실행 중단 상태로 대기 중
재귀 호출 흐름을 간단히 다시 보자

1. reverseList(1) → reverseList(2) 호출함 → 일시정지
2. reverseList(2) → reverseList(3) 호출함 → 일시정지
3. reverseList(3) → head.next === null이라 return 3
   이제!
   reverseList(3)은 끝났지만 reverseList(2)는 여기서 계속됨:

```js
const newHead = reverseList(head.next); // 여기서 reverseList(3) 호출했었음
// 이제 결과가 돌아왔으니, 이 다음 줄부터 실행됨 👇
head.next.next = head;
head.next = null;
return newHead;
```

### ✅ 2단계: 되돌아오면서 실행!

돌아와서 reverseList(2)의 나머지 코드 실행

```js
head = 2
newHead = 3 (반환값)

head.next.next = head  → 3.next = 2
head.next = null       → 2.next = null
```

이제 리스트는 `3 → 2 → null`
reverseList(2)가 끝나고 reverseList(1)이 여기서 계속됨:
또 돌아와서 reverseList(1)의 나머지 코드 실행

```js
head = 1
newHead = 3 (그대로 유지)

head.next.next = head  → 2.next = 1
head.next = null       → 1.next = null
```

최종 `3 → 2 → 1 → null`

### ✅ 정리

```js
head.next.next = head;
head.next = null;
```

이 코드들은 각 재귀 호출이 반환될 때, 즉 스택에서 pop될 때 실행
| 스택에서 pop되는 시점 | 실행되는 코드 |
|----------------------------|-------------------|
| `reverseList(3)` → 3 리턴 | X (종료 조건) |
| `reverseList(2)` → 실행 | `3.next = 2` |
| `reverseList(1)` → 실행 | `2.next = 1` |
