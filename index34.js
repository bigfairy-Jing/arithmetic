// 分治思想

// 1. 分解子问题
// 2. 求解每个子问题
// 3. 合并子问题的解,得出大问题的解

// 归并排序
// 分解子问题: 将需要被排序的数组从中间分割为两半,然后再将分割出来的每个子数组分割为
// 两半,重复以上操作,知道单个子数组只有一个元素为止

// 求解每个子问题: 从粒度最小的子数组开始,两两合并,确保每次合并出来的数组都是有序的(这里的"子问题指的
// 每个子数组进行排序")

// 合并子问题的解, 得出打问题的解: 当数组被合并至原有的规模是,就得到了一个完全排序的数组

function mergeArr(arr1, arr2) {
  let i = 0, j = 0
  const res = []
  const len1 = arr1.length
  const len2 = arr2.length
  while (i < len1 && j < len2) {
    if(arr1[i] < arr2[j]){
      res.push(arr1[i])
      i++
    }else{
      res.push(arr2[j])
      j++
    }
  }

  if(i < len1){
    return res.concat(arr1.slice(i))
  }else{
    return res.concat(arr2.slice(j))
  }
}


function mergeSort(arr) {
  const len = arr.length
  if(len <= 1) return arr

  const mid = Math.floor(len / 2)
  const leftArr = mergeSort(arr.slice(0, mid))
  const rightArr = mergeSort(arr.slice(mid, len))

  return mergeArr(leftArr, rightArr) 
}

// 快速排序 选择基准值mid, 循环原数组
// 小于基准值方左数组, 大于放右边数组, 然后concat组合,最后依靠递归完成排序
const quickSort = arr => {
  const len = arr.length
  if(len <= 1) return arr
  const right = []
  const left = []
  const mid = arr.splice(0, 1)
  for (let i = 0; i < len; i++) {
    if(arr[i] < mid) left.push(arr[i])
    else right.push(arr[i])
  }
  return quickSort(left).concat(mid, quickSort(right))
}








