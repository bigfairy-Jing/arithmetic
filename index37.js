// 有 n 件物品，物品体积用一个名为 w 的数组存起来，物品的价值用一个名为 value 的数组存起来；
// 每件物品的体积用 w[i] 来表示，每件物品的价值用 value[i] 来表示。
// 现在有一个容量为 c 的背包，问你如何选取物品放入背包，才能使得背包内的物品总价值最大？
// 注意: 每个物品都只有一件

//  n: n件物品
//  c: 背包容量
//  w: 物品体积数组
//  value: 物品价值数组
function limitContiner(n, c, w, value) {
  // 填充容量为c+1空数组, [0,0,0....,0]
  const dp = (new Array(c+1)).fill(0)

  let res = 0
  const resArr = []

  // 这里遍历i为物品索引
  for (let i = 0; i < n; i++) {
    // 递减背包的容量,只剩下当前物品
    for (let v = c; v >= w[i]; v--) {
      if(dp[v] < dp[v-w[i]] + value[i]){
        console.log('多少次', i)
        dp[v] = dp[v-w[i]] + value[i]
        resArr.push(i)
      }
      // 得到最大值重新赋值
      if(dp[v] > res) {

        res = dp[v]
      }
    }
  }
  return [res, dp, resArr]
}

console.log(limitContiner(5, 18, [1,10,2,4,2,9,5],[3,4,6,2,7,4,3]))
// limitContiner(5,12,[1,10,2,4,2],[3,4,6,2,7])