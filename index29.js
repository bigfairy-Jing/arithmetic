// 二叉树 中序遍历 左 -> 中 -> 右

const inorderTraversal = function(root) {
  const res = []

  const stack = []

  let cur = root

  while (cur || stack.length) {

    while (cur) {
      stack.push(cur)
      cur = cur.left
    }

    cur = stack.pop()

    res.push(cur.val)

    cur = cur.right

  }

  return res
}



