// 二叉搜索树
// 二叉搜索树（Binary Search Tree）简称 BST，是二叉树的一种特殊形式。
// 它有很多别名，比如排序二叉树、二叉查找树等等。

// 定义：
// 是一棵空树
// 是一棵由根结点、左子树、右子树组成的树，同时左子树和右子树都是二叉搜索树，
// 且左子树上所有结点的数据域都小于等于根结点的数据域，
// 右子树上所有结点的数据域都大于等于根结点的数据域

// 查找结点

function search(root, n) {
  if(!root) return
  if(root.val === n){
    console.log(`目标节点是：${root}`)
  }else if(root.val > n){
    search(root.left, n)
  }else {
    search(root.right, n)
  }
}

// 插入新节点
function insertIntoBst(root, n) {
  if(!root){
    root = new TreeNode(n) // 暂定伪代码
    return root
  }

  if(root.val > n){
    root.left = insertIntoBst(root.left, n)
  }else{
    root.right = insertIntoBst(root.right, n)
  }

  return root
}

// 删除某个节点
// 1. 节点不存在，定位到了空结点。直接返回即可
// 2. 需要删除的目标节点没有左孩子也没有右孩子，直接删除即
// 3. 需要删除的目标节点存在左子树，那么就去左子树里寻找小于目标节点值的最大节点，用这个节点覆盖目标节点
// 4. 需要删除的目标节点存在右子树，那么去右子树里寻找大于目标节点值的最小节点， 用这个节点覆盖调目标节点
// 5. 需要删除的目标节点既有左子树，又有右子树，这时就有两种方法要做，要么取左边，要么取右边

function findMax(root) {
  while (root.right) {
    root = root.right
  }
  return root
}

function findMin(root) {
  while (root.left) {
    root = root.left
  }
  return root
}

function deleteNode(root, n) {
  if(!root) return root

  if(val ===  n){
    if(!root.left && !root.right) {
      root = null
    }else if(root.left){
      const maxLeft = findMax(root.left)
      root.val = maxLeft.val
      root.left = deleteNode(root.left, maxLeft.val)
    }else {
      const minRight = findMin(root.right)
      root.val = minRight.val
      root.right = deleteNode(root.right, minRight.val)
    }
  }else if(root.val > n){
    root.left = deleteNode(root.left, n)
  }else {
    root.right = deleteNode(root.right, n)
  }
  return root
}

// 判断一个树是不是二叉搜索树
const isValidBst = root => {
  function dfs(root, minValue, maxValue) {
    if(!root) return true
    if(root.val <= minValue || root.val >= maxValue) return false
    return dfs(root.left, minValue,root.val) && dfs(root.right, root.val, maxValue)
  }
  return dfs(root, -Infinity, Infinity)
}

// 将一个按照升序排列的有序数组，转换为一颗高度平衡的二叉搜索树

const sorteArrayToBST = function(nums) {
  // 处理边界条件 
  if(!nums.length) return null

  function buildBST(low, high) {
    if(low > high) return null

    const mid = Math.floor(low + (high - low)/2)
    const cur = new TreeNode(nums[mid])
    cur.left = buildBST(low,mid - 1)
    cur.right = buildBST(mid + 1, high)
    return cur
    
  }

  return buildBST(0, nums.length - 1)
}