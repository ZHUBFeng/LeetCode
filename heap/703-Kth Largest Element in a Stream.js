/**
 * @param {number} k
 * @param {number[]} nums
 */

var KthLargest = function (k, nums) {
  this.heap = new PirorityQueue()
  this.k = k

  if (this.k >= nums.length) {
    for (var i = 0; i < nums.length; i++) {
      this.heap.push(nums[i])
    }
  } else {
    for (var i = 0; i < this.k; i++) {
      this.heap.push(nums[i])
    }
    for (var i = this.k; i < nums.length; i++) {
      if (this.heap.peak() < nums[i]) {
        this.heap.pop()
        this.heap.push(nums[i])
      }
    }
  }
};
/** 
* @param {number} val
* @return {number}
*/

KthLargest.prototype.add = function (val) {
  if (this.heap.size < this.k) {
    this.heap.push(val)
  } else if (this.heap.peak() < val) {
    this.heap.pop()
    this.heap.push(val)
  }
  return this.heap.peak()
};

/** 
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/
// 最小堆
class PirorityQueue {
  constructor() {
    this.elements = []
  }

  heapify() {
    var startIdx = (this.size - 2) >> 1
    for (var i = startIdx; i >= 0; i--) {
      this.heapdown(i)
    }
  };

  push(val) {
    this.elements.push(val)
    this.heapup(this.size - 1)
  }

  pop() {
    var head = this.elements[0]
    this.elements[0] = this.elements[this.size - 1]
    var last = this.elements.pop()
    this.heapdown(0)
    return head
  }

  peak() {
    return this.elements[0]
  }

  _swap(i, j) {
    var t = this.elements[i]
    this.elements[i] = this.elements[j]
    this.elements[j] = t
  }

  get size() {
    return this.elements.length
  }

  heapup(idx) {
    while (idx > 0) {
      var pidx = (idx - 1) >> 1
      if (this.elements[idx] < this.elements[pidx]) {
        this._swap(idx, pidx)
        idx = pidx
      } else {
        break
      }
    }
  }

  heapdown(idx) {
    while (idx < this.size) {
      var minIdx = idx
      var lIdx = idx * 2 + 1
      var rIdx = lIdx + 1
      if (lIdx < this.size && this.elements[lIdx] < this.elements[minIdx]) {
        minIdx = lIdx
      }
      if (rIdx < this.size && this.elements[rIdx] < this.elements[minIdx]) {
        minIdx = rIdx
      }

      if (idx != minIdx) {
        this._swap(minIdx, idx)
        idx = minIdx
      } else {
        break
      }
    }
  }
}