// // 滑动窗口问题
// 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

// 示例:

// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]

// 解释: 滑动窗口的位置

// ---------------

// [1 3 -1] -3 5 3 6 7

// 1 [3 -1 -3] 5 3 6 7
// 1 3 [-1 -3 5] 3 6 7
// 1 3 -1 [-3 5 3] 6 7
// 1 3 -1 -3 [5 3 6] 7
// 1 3 -1 -3 5 [3 6 7]

// 最大值分别对应：

// 3 3 5 5 6 7

// 提示：你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

const maxSlid = (nums, k) => {
  const len = nums.length
  const res = []
  const deque = []

  for (let i = 0; i < len; i++) {
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }
    deque.push(i)
    while (deque.length && deque[0] <= i-k) {
      deque.shift()
    }
    if(i >= k -1) res.push(nums[deque[0]])
  }
  return res
}

console.log(maxSlid([1,3,-1,-3,5,3,6,7], 3))