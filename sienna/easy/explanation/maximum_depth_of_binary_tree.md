<!--
date: 2025-04-11
category: tree, binary-tree, depth-first-search(DFS), recursion
difficulty: easy
source: LeetCode 75
number: 104
link: https://leetcode.com/problems/maximum-depth-of-binary-tree/?envType=study-plan-v2&envId=leetcode-75
-->

아래와 같이 트리노드는 우리가 직접 .left, .right이라는 프로퍼티를 가진 객체로 만든다.
자바스크립트에서는 트리 노드를 직접 이렇게 정의하는 경우가 많다.

```
- Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
```

# ✅ 재귀 방식 (DFS)

DFS: 깊이를 구하는 과정에서 DFS(재귀 혹은 스택 사용)를 사용함

### ✨ 장점

- 코드가 간결하고 직관적
- 트리 구조는 본질적으로 재귀 구조랑 잘 어울림 (자식 → 자식 → 말단 → 되돌아옴)

```js
var maxDepth = function (root) {
  if (root === null) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
```

### 💬 설명

- 루트가 null이면 0
- 아니면 왼쪽/오른쪽 자식의 깊이 중 더 큰 값 + 1을 리턴
  예시

```
    1
   / \
  2   3

```

maxDepth(1)
→ 왼쪽 자식 깊이 구하려고 maxDepth(2) 호출
→ 오른쪽 자식 깊이 구하려고 maxDepth(3) 호출

maxDepth(2)
→ 리프 노드니까 left, right가 전부 null
→ maxDepth(null) 2번 호출해서 0 + 0 → 리턴값: 1

maxDepth(3)
→ 역시 리프 노드 → 똑같이 1 리턴

다시 maxDepth(1)
왼쪽: 1, 오른쪽: 1 → 1 + max(1, 1) → 2 리턴

# ✅ 2. 반복문 방식 (BFS, Queue 사용)

BFS = Breadth-First Search (너비 우선 탐색)

- 트리나 그래프를 탐색할 때 사용하는 알고리즘
- "깊이보다 너비(레벨)"를 먼저 본다
- 즉, 위에서 아래로, 왼쪽에서 오른쪽으로 한 레벨씩 순서대로 탐색

### ✨ 장점

- 트리의 레벨을 기준으로 순회하므로, 최대 깊이를 계산하기에 직관적
- 재귀가 깊어질 때 생길 수 있는 스택 오버플로우 위험 없음

```js
var maxDepth = function (root) {
  if (root === null) return 0;

  let queue = [root]; // 탐색할 노드를 차례대로 담음
  let depth = 0;

  while (queue.length > 0) {
    // 큐에 아직 노드가 남아있을 동안 반복, 즉, 모든 레벨을 순회할 때까지 계속 진행
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    depth++;
  }

  return depth;
};
```

### 💬 설명

예: 트리 [1, 2, 3]

1. `queue = [1]` → depth = 0
2. 처리: 1 `queue.shift()` → 자식 2, 3 추가 `que= [2,3]` → depth = 1
3. 처리: 2 `queue.shift()` → 자식 없음 → 처리: 3 `queue.shift()` → 자식 없음 → depth = 2
4. queue 비었음 → 종료 → 깊이 = 2
