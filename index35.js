// 假设爬楼梯,楼梯有n阶,一次可以爬1或者2个台阶.你有多少种不同方法可以爬到楼顶.
// n = 2  有两种 1阶 + 1阶   2阶

// 记忆搜搜解法 自伤而底
const f = []
const climbStairs = function(n) {
  if( n === 1 ) return 1
  if( n ===2 ) return 2

  if(f[n] === undefined) f[n] = climbStairs(n-1) + climbStairs(n - 2)
  return f[n]
}

// 动态规划解法 自底向上
const climbStairs = function(n) {
  const f = []
  f[1] = 1
  f[2] = 2

  for (let i = 3; i < n; i++) {
    f[i] = f[i-2] + f[i-1]
  }
  return f[n]
}