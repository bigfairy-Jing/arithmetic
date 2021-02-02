// 给定一个二叉树, 返回它的前序(先序)遍历序列
// 先序遍历  根 -> 左 -> 右
const preorderTraversal = function(root) {
  const res = []
  if(!root) return []

  const stack = []

  stack.push(root)

  while (stack.length) {
    const cur = stack.pop()

    res.push(cur.val)

    if(cur.right) stack.push(cur.right)

    if(cur.left) stack.push(cur.left)
  }

  return res
}

// 后序遍历  左 -> 右 -> 根
const preorderTraversal = function(root) {
  const res = []
  if(!root) return []

  const stack = []

  stack.push(root)

  while (stack.length) {
    const cur = stack.pop()

    res.unshift(cur.val)

    if(cur.left) stack.push(cur.left)

    if(cur.right) stack.push(cur.right)

  }

  return res
}