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
  let prev = null;
  let curr = head;

  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
