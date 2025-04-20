/* 
date: 2025-04-11
category: Queue
difficulty: easy 
source: LeetCode 75
number: 933
link: https://leetcode.com/problems/number-of-recent-calls/?envType=study-plan-v2&envId=leetcode-75
*/

var RecentCounter = function () {
  this.queue = []; // 요청 시간을 저장할 큐
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.queue.push(t); // 새로운 요청 추가

  // 큐 앞에서부터 오래된 요청 제거
  while (this.queue[0] < t - 3000) {
    this.queue.shift();
  }

  return this.queue.length; // 최근 3000ms 내 요청 수 반환
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
