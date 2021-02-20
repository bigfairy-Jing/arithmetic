// 平衡二叉树
// 平衡二叉树是任意结点的左右子树高度差绝对值都不大于1的二叉搜索树。

const isBalanced = (root) => {
  let flag = true
  function dfs(root) {
    if(!root || !flag) return 0

    const left = dfs(root.left)
    const right = dfs(root.right)

    if(Math.abs(left - right) > 1){
      flag = false
      return 0
    }

    return Math.max(left, right) + 1
  }

  dfs(root)

  return flag
}

// 给你一棵二叉搜索树，请你返回一棵平衡后的二叉搜索树，新生成的树应该与原来的树有着相同的节点值。
const balanceBST = function(root) {
  const nums = []

  function inorder(root) {
    
    if(!root) return

    inorder(root.left)
    nums.push(root.val)
    inorder(root.right)
  }

  function buildAVL(low, high) {
    if(low > high) {
      return null
    }

    const mid = Math.floor(low + (high - low)/2)
    const cur = new TreeNode(nums[mid])
    cur.left = buildAVL(low, mid -1)
    cur.right = buildAVL(mid + 1, high)
    return cur
  }
  
  inorder(root)
  
  return buildAVL(0, nums.length - 1)
}