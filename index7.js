// 提出问题：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。 

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const mergeTowLists = function(l1,l2){
  let head = new ListNode()
  
  let cur = head

  while (l1 && l2) {
    if(l1.val <= l2.val){
      cur.next = l1
      l1 = l1.next
    }else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  cur.next = l1 !== null ? l1: l2
  return head.next
}


// 提出问题：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

// 输入: 1->1->2
// 输出: 1->2
// 示例 2:
// 输入: 1->1->2->3->3
// 输出: 1->2->3


const deleteDuplicates = function(head) {
  let cur = head;

  while (cur !== null && cur.next.val) {
    if(cur.val === cur.next.val){
      cur.next = cur.next.next
    }else {
      cur = cur.next
    }
  }
  return head
}