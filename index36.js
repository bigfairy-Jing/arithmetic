// 给定不同面额的硬币,和一个总金额amount,编写一个函数来计算可以凑成总金额所需的最少硬币数量
// 如果没有任何一中应该组合能组成总金额返回-1

const coinChange = function(coins, amount) {
  const f = []

  f[0] = 0

  for (let i = 0; i <= amount; i++) {
    f[i] = Infinity

    for (let j = 0; j < coins.length; j++) {
      if(i - coins[j] >= 0){
        f[i] = Math.min(f[i], f[i-coins[j]] + 1)
      }
    }
    
  }

  if(f[amount] === Infinity) return -1

  return f[amount] 
}

