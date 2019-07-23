/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  var map = {}
  var res = []
  var heap = new PriorityQueue()
  for (var key of words) {
    if (key in map) {
      map[key]++
    } else {
      map[key] = 1
    }
  }

  for (var key in map) {
    var pair = new Pair(key, map[key])
    heap.push(pair)
  }

  for (var i = 0; i < k; i++) {
    res.push(heap.pop())
  }

  return res
};

class Pair {
  constructor(key, val) {
    this.key = key
    this.val = val
  }
}

class PriorityQueue {
  constructor(compare = (a, b) => a.val - b.val) {
    this.elements = []
    this.compare = compare
  }

  push(pair) {
    this.elements.push(pair)
    this.heapup(this.size - 1)
  }

  pop() {
    var head = this.elements[0].key
    this.elements[0] = this.elements[this.size - 1]
    this.heapdown(0)
    return head
  }

  get size() {
    return this.elements.length
  }

  _swap(i, j) {
    var t = this.elements[i]
    this.elements[i] = this.elements[j]
    this.elements[j] = t
  }

  //从某个位置开始向上调整，用于添加元素
  heapup(idx) {
    if (idx > 0) { // 当前节点还在数组中就进行
      var pidx = (idx - 1) >> 1
      if (this.compare(this.elements[idx], this.elements[pidx]) > 0 ||
        this.compare(this.elements[idx], this.elements[pidx]) == 0 && this.elements[idx].key < this.elements[pidx].key) {
        this._swap(idx, pidx)
        this.heapup(pidx)
      } else {
        return
      }
    }
  }

  //从某个位置开始向下调整，适用于堆顶删除了一个元素时，堆尾的元素补在了堆顶时
  heapdown(idx) {
    if (idx < this.elements.length) {
      var maxIdx = idx
      var lIdx = idx * 2 + 1
      var rIdx = lIdx + 1
      if (lIdx < this.elements.length) {
        if (this.compare(this.elements[lIdx], this.elements[maxIdx]) > 0 ||
          this.compare(this.elements[lIdx], this.elements[maxIdx]) == 0 && this.elements[lIdx].key < this.elements[maxIdx].key) {
          maxIdx = lIdx
        }
      }
      if (rIdx < this.elements.length) {
        if (this.compare(this.elements[rIdx], this.elements[maxIdx]) > 0 ||
          this.compare(this.elements[rIdx], this.elements[maxIdx]) == 0 && this.elements[rIdx].key < this.elements[maxIdx].key) {
          maxIdx = rIdx
        }
      }

      if (idx != maxIdx) {
        this._swap(maxIdx, idx)
        this.heapdown(maxIdx)
      }
    }
  }
}

