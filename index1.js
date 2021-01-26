// 提出问题： 给定一个整数数组 nums 和一个目标值 target，
// 请你在该数组中找出和为目标值的那 两个 整数，
// 并返回他们的数组下标。

const twoSum = (nums, target) => {
  const map = new Map()
  const arr = []
  nums.forEach((num,index) => {
    const n = map.get(target - num)
    if(n !== undefined){
      arr.push([index,target - num])
    }else {
      map.set(index,num)
    }    
  });
  console.log(arr)
}
twoSum([0,1,2,3,4,5,6], 5)
