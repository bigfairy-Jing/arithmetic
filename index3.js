// 提出问题：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，
// 使得 a + b + c = 0 ？
// 请你找出所有满足条件且不重复的三元组。
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]

// 双指针法

const sum3 = arr => {
  arr = arr.sort((a, b)=> a-b)
  const result = []
  const len  = arr.length
  for (let i = 0; i < len - 2; i++) {
    j = i + 1
    k = len - 1
    if (i > 0 && arr[i] === arr[i - 1]) continue

    while (j < k) {
      if(arr[i] + arr[j] + arr[k] > 0){
        k--
        while (k>j && arr[k] === arr[k+1]) {
          k--
        }
      }else if(arr[i] + arr[j] + arr[k] < 0){
        j++
        while (k>j && arr[j] === arr[j - 1]) {
          j++
        }
      }else {
        console.log(arr[i], arr[j], arr[k])
        result.push([arr[i], arr[j], arr[k]])
        j++
        k--
        while (j<k && arr[j] === arr[j-1]) {
          j++
        }
        while (j<k && arr[k] === arr[k+1]) {
          k--
        }
      }
    }
  }
  return result
}

console.log(sum3( [-1, 0, 1, 2, -1, -4]))