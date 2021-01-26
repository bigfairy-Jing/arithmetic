// 提出问题：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

const valid = str => {
  const isHui = (start, end,s)=>{
    while (start < end) {
      if(s[start] !== s[end]) return false
      start++
      end--
    }
    return true
  }
  let len = str.length
  let i = 0 
  let j = len - i
  while (i<j && str[i] === str[j]) {
    i++
    j--
  }
  // 左边
  if(isHui(i+1,j,str)){
    return true
  }

  // 右边
  if(isHui(i,j-1,str)){
    return true
  }
  return false
}

console.log(valid('aba'))
console.log(valid('acbda'))
console.log(valid('acca'))