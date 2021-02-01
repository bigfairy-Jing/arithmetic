/**
 * 1.计算多个区间的交集
 *   区间用长度为2的数字数组表示，如[2, 5]表示区间2到5（包括2和5）；
 *   区间不限定方向，如[5, 2]等同于[2, 5]；
 *   实现`getIntersection 函数`
 *   可接收多个区间，并返回所有区间的交集（用区间表示），如空集用null表示
 * 示例：
 *   getIntersection([5, 2], [4, 9], [3, 6]); // [4, 5]
 *   getIntersection([1, 7], [8, 9]); // null
 */

function getIntersection() {
  const arr = Array.from(arguments)
  const len = arr.length
  let max, min
  if(len === 0) return null
  for (let i = 0; i < len; i++) {
    const ele = arr[i];
    const _max = Math.max(ele[0], ele[1])
    const _min = Math.min(ele[0], ele[1])
    if(i === 0){
      [max, min] = [_max, _min]
    }else{
      max = _max > max ? max : _max
      min = _min > min ? _min : min
    }
    if(max === min) return [max]
    if(max < min) return null
  }
  return [min, max]
}

const test1 = getIntersection([5, 2], [4, 9], [3, 6]); // [4, 5]
const test2 = getIntersection([1, 7], [8, 9]); // null
console.log(test1, test2)