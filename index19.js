// 二叉树层序遍历
const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};


function BFS(root){
  const queue = []
  queue.push(root)
  while (queue.length) {
    const now = queue[0]
    console.log(now.val)
    if(now.left)queue.push(now.left)
    if(now.right)queue.push(now.right)
    queue.shift() 
  }
}
BFS(root)
















