/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
//直接利用排序
var kClosest = function (points, K) {
  points.sort((a, b) => (a[0] * a[0] + a[1] * a[1]) - (b[0] * b[0] + b[1] * b[1]))
  return points.slice(0, K)
};

//利用heap
var kClosest = function (points, K) {
  var dis = points.map(item => item[0] * item[0] + item[1] * item[1])
  var res = []

  var heap = new PriorityQueue(dis, points)

  for (var j = 0; j < K; j++) {
    res.push(heap.pop())
    heap.heapdown(0)
  }
  return res
};

class PriorityQueue {
  constructor(initialValues = [], points, compare = (a, b) => b - a) {
    this.elements = initialValues.slice()
    this.points = points
    this.compare = compare
    this.heapify()
  }

  push(val) {
    this.elements.push(val)
    this.heapup(this.size - 1)
  }

  pop() {
    var head = this.points[0]
    this.points[0] = this.points[this.size - 1]
    this.elements[0] = this.elements[this.size - 1]
    this.elements.pop()
    this.points.pop()
    this.heapdown(0)
    return head
  }

  get size() {
    return this.elements.length
  }

  //将无序的elements就地调整成一个堆
  heapify() {
    var startIdx = (this.elements.length - 2) >> 1
    for (var i = startIdx; i >= 0; i--) {
      this.heapdown(i)
    }
  }

  _swap(ary, i, j) {
    var t = ary[i]
    ary[i] = ary[j]
    ary[j] = t

  }

  //从某个位置开始向上调整，用于添加元素
  heapup(idx) {
    if (idx > 0) { // 当前节点还在数组中就进行
      var pidx = (idx - 1) >> 1
      if (this.compare(this.elements[idx], this.elements[pidx]) > 0) {
        this._swap(this.elements, idx, pidx)
        this._swap(this.points, idx, pidx)
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
      if (lIdx < this.elements.length && this.compare(this.elements[lIdx], this.elements[maxIdx]) > 0) {
        maxIdx = lIdx
      }
      if (rIdx < this.elements.length && this.compare(this.elements[rIdx], this.elements[maxIdx]) > 0) {
        maxIdx = rIdx
      }

      if (idx != maxIdx) {
        this._swap(this.elements, maxIdx, idx)
        this._swap(this.points, maxIdx, idx)
        this.heapdown(maxIdx)
      }
    }
  }
}


