// 提出问题：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const removeNthFromEnd = function(head, n) {
  const dummy = new ListNode()
  dummy.next = head

  let fast = dummy
  let slow = dummy

  while (n !== 0) {
    fast = fast.next
    n--
  }

  while (fast.next) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummy.next
}