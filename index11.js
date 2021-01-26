// 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
const reverseBetween = (head, m , n) => {
  let pre, cur , leftHead
  const dummy = new ListNode()
  dummy.next = head

  let p = dummy

  for(let i=0; i< m - 1; i++){
    p = p.next
  }

  leftHead = p

  let start = leftHead.next

  pre = start

  cur = pre.next

  for (let i = m; i < n; i++){
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }

  leftHead.next = pre
  start.next = cur

  return dummy.next
}