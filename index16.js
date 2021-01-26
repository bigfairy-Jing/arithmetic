// 题目描述：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// push(x) —— 将元素 x 推入栈中。

// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。

// 示例:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin(); --> 返回 -3.
// minStack.pop();
// minStack.top(); --> 返回 0.
// minStack.getMin(); --> 返回 -2.

// 时间复杂度O(1)实现

MinStack.prototype.push = function(x) {
  this.stack.push(x)
  if(this.stack2.length === 0 ||this.stack2[this.stack2.length - 1] >= x){
    this.stack2.push(x)
  }
}

MinStack.prototype.pop = function(x) {
  if(this.stack.pop() === this.stack2[this.stack2.length -1]){
    this.stack2.pop()
  }
}

MinStack.prototype.top = function(){
  return this.stack[this.stack.length -1]
}

MinStack.prototype.getMin = function(){
  return this.stack2[this.stack2.length -1]
}