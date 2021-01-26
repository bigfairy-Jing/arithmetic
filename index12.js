// 给定一个链表判断一个链表是否有环形链

const isHuan = head => {

  while (head) {
    if(head.flag) return true
    else {
      head.flag = true
      head = head.next
    }
  }
  return false
}