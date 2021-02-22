// 排序算法
// 1. 冒泡排序
// 2. 插入排序
// 3. 选择排序
// 4. 归并排序
// 5. 快速排序

// 1. 冒泡排序

function bubbleSort(arr) {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    // 内层循环用于完成每一轮遍历过程中的重复比较 + 交换
    let flag = false
    for (let j = 0; j < len - i - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        flag = true
      }
    }
    if(!flag) return arr
  }
  return arr
}


// 2. 选择排序
// 选择排序关键词最小值: 循环遍历数组,每次找出当前范围内的最小值,把它放在当前范围的头部;
// 然后缩小排序范围,继续重复以上操作,直至数组完全有序为止

function selectSort(arr) {
  const len = arr.length
  let minIndex
  for (let i = 0; i < len; i++) {
    minIndex = i
    for (let j = i; j < j<len; j++) {
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }

    if(minIndex !== i){
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }

  }
  return arr
}

// 3.插入排序
// 插入排序的核心思想是找到元素在它前面那个序列中的正确位置
// 通过正确的定位当前元素在有序序列里的位置,不断扩大有序数组的范围,最终达到完全排序的目的

function insertSort(arr) {
  const len = arr.length

  let temp 
  for (let i = 0; i < len; i++) {
    let j = i
    temp = arr[i]
    while (j>0 && arr[j - 1] > temp) {
      arr[j] = arr[i - 1]
      arr[j] = temp
    }
    
  }
  return arr
}
