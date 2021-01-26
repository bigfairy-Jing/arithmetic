// 给定一个链表，返回链表开始入环的第一个节点。如果链表没有环，则返回null
const detectCycle = head => {
  while (head) {
    if(head.flag) return head
    else{
      head.flag = true
      head = head.next
    }
  }
  return null
}


