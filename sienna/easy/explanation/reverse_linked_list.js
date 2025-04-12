/* 
date: 2025-04-11
category: linked list, two pointers
difficulty: easy 
source: LeetCode 75
number: 206
link: https://leetcode.com/problems/reverse-linked-list/?envType=study-plan-v2&envId=leetcode-75
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  //curr이 null이 될 때까지, 즉 리스트 끝에 도달할 때까지 반복
  let prev = null; // 처음엔 이전 노드가 없음(null)
  let curr = head; // 현재 노드는 head부터 시작

  while (curr !== null) {
    let next = curr.next; // 다음 노드를 저장해두기
    curr.next = prev; // 현재 노드의 방향을 반대로 바꾸기
    prev = curr; // prev를 현재 노드로 업데이트
    curr = next; // 다음 노드로 이동
  }

  return prev; // prev는 뒤집힌 리스트의 새 head
};
