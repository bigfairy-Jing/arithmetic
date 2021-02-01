## 自动生成readme.md文件  
* npm run create
## 前置知识
* [info.md](./info.md) 



### [index1.js](./index1.js)
* 提出问题： 给定一个整数数组 nums 和一个目标值 target，  
* 请你在该数组中找出和为目标值的那 两个 整数，  
* 并返回他们的数组下标。


### [index2.js](./index2.js)
* 提出问题：给你两个有序整数数组 nums1 和 nums2，  
* 请你将 nums2 合并到 nums1 中，  
* 使 nums1 成为一个有序数组。  
* 说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。  
* 输入:  
* nums1 = [1,2,3,0,0,0], m = 3  
* nums2 = [2,5,6, 0], n = 3  
* 输出: [1,2,2,3,5,6]


### [index3.js](./index3.js)
* 提出问题：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，  
* 使得 a + b + c = 0 ？  
* 请你找出所有满足条件且不重复的三元组。  
* 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]  
* 双指针法


### [index4.js](./index4.js)
* 提出问题：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。  
* 左边  
* 右边


### [index5.js](./index5.js)
* 提出问题： 设计一个支持以下两种操作的数据结构：  
* void addWord(word)  
* bool search(word)  
* search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。  
* . 可以表示任何一个字母。  
* addWord("bad")  
* addWord("dad")  
* addWord("mad")  
* search("pad") -> false  
* search("bad") -> true  
* search(".ad") -> true  
* search("b..") -> true


### [index6.js](./index6.js)
* 提出问题：请你来实现一个 atoi 函数，使其能将字符串转换成整数。  
* 首先，该函数会根据需要丢弃无用的开头空格字符，直到寻找到第一个非空格的字符为止。  
* 当我们寻找到的第一个非空字符为正或者负号时，则将该符号与之后面尽可能多的连续数字组合起来，作为该整数的正负号；假如第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。  
* 该字符串除了有效的整数部分之后也可能会存在多余的字符，这些字符可以被忽略，它们对于函数不应该造成影响。  
* 注意：假如该字符串中的第一个非空格字符不是一个有效整数字符、字符串为空或字符串仅包含空白字符时，则你的函数不需要进行转换。  
* 在任何情况下，若函数不能进行有效的转换时，请返回 0。  
* 说明：  
* 假设我们的环境只能存储 32 位大小的有符号整数，那么其数值范围为 [−2^31,  2^31 − 1]。如果数值超过这个范围，请返回  INT_MAX (2^31 − 1) 或 INT_MIN (−2^31) 。  
* 示例 1:  
* 输入: "42"  
* 输出: 42  
* 示例 2:  
* 输入: " -42"  
* 输出: -42  
* 解释: 第一个非空白字符为 '-', 它是一个负号。  
* 我们尽可能将负号与后面所有连续出现的数字组合起来，最后得到 -42 。  
* 示例 3:  
* 输入: "4193 with words"  
* 输出: 4193  
* 解释: 转换截止于数字 '3' ，因为它的下一个字符不为数字。  
* 示例 4:  
* 输入: "words and 987"  
* 输出: 0  
* 解释: 第一个非空字符是 'w', 但它不是数字或正、负号。 因此无法执行有效的转换。  
* 示例 5:  
* 输入: "-91283472332"  
* 输出: -2147483648  
* 解释: 数字 "-91283472332" 超过 32 位有符号整数范围。因此返回 INT_MIN (−2^31) 。


### [index7.js](./index7.js)
* 提出问题：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。   
* 提出问题：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。  
* 输入: 1->1->2  
* 输出: 1->2  
* 示例 2:  
* 输入: 1->1->2->3->3  
* 输出: 1->2->3


### [index8.js](./index8.js)
* 提出问题：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。


### [index9.js](./index9.js)
* 提出问题：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。


### [index10.js](./index10.js)
* 提出问题：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。  
* 输入: 1->2->3->4->5->NULL  
* 输出: 5->4->3->2->1->NULL


### [index11.js](./index11.js)
* 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。


### [index12.js](./index12.js)
* 给定一个链表判断一个链表是否有环形链


### [index13.js](./index13.js)
* 给定一个链表，返回链表开始入环的第一个节点。如果链表没有环，则返回null


### [index14.js](./index14.js)
* 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。  
* 有效字符串需满足：  
* 左括号必须用相同类型的右括号闭合。  
* 左括号必须以正确的顺序闭合。  
* 注意空字符串可被认为是有效字符串。  
* 示例 1:  
* 输入: "()"  
* 输出: true  
* 示例 2:  
* 输入: "()[]{}"  
* 输出: true  
* 示例 3:  
* 输入: "(]"  
* 输出: false  
* 示例 4:  
* 输入: "([)]"  
* 输出: false  
* 示例 5:  
* 输入: "{[]}"  
* 输出: true


### [index15.js](./index15.js)
* 根据每日气温列表，请重新生成一个列表，  
* 对应位置的输出是需要再等待多久温度才会升高超过该日的天数。  
* 如果之后都不会升高，请在该位置用 0 来代替。  
* 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，  
* 你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。  
* 气温 列表长度的范围是 [1, 30000]。  
* 每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。


### [index16.js](./index16.js)
* 题目描述：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。  
* push(x) —— 将元素 x 推入栈中。  
* pop() —— 删除栈顶的元素。  
* top() —— 获取栈顶元素。  
* getMin() —— 检索栈中的最小元素。  
* 示例:  
* MinStack minStack = new MinStack();  
* minStack.push(-2);  
* minStack.push(0);  
* minStack.push(-3);  
* minStack.getMin(); --> 返回 -3.  
* minStack.pop();  
* minStack.top(); --> 返回 0.  
* minStack.getMin(); --> 返回 -2.  
* 时间复杂度O(1)实现


### [index17.js](./index17.js)
* 题目描述：使用栈实现队列的下列操作：  
* push(x) -- 将一个元素放入队列的尾部。  
* pop() -- 从队列首部移除元素。  
* peek() -- 返回队列首部的元素。  
* empty() -- 返回队列是否为空。  
* 示例:  
* MyQueue queue = new MyQueue();  
* queue.push(1);  
* queue.push(2);  
* queue.peek(); * 返回 1  
* queue.pop(); * 返回 1  
* queue.empty(); * 返回 false  
* 说明:  
* 你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。  
* 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。  
* 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。


### [index18.js](./index18.js)
* * 滑动窗口问题  
* 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。  
* 示例:  
* 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]  
* 解释: 滑动窗口的位置  
* ---------------  
* [1 3 -1] -3 5 3 6 7  
* 1 [3 -1 -3] 5 3 6 7  
* 1 3 [-1 -3 5] 3 6 7  
* 1 3 -1 [-3 5 3] 6 7  
* 1 3 -1 -3 [5 3 6] 7  
* 1 3 -1 -3 5 [3 6 7]  
* 最大值分别对应：  
* 3 3 5 5 6 7  
* 提示：你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。


### [index19.js](./index19.js)
* 二叉树层序遍历


### [index20.js](./index20.js)
* 给定一个没有重复数字的序列，返回其所有可能的全排列。  
* 示例：     
* 输入: [1,2,3]  
* 输出: [  
* [1,2,3],  
* [1,3,2],  
* [2,1,3],  
* [2,3,1],  
* [3,1,2],  
* [3,2,1]  
* ]  
* 变量记录当前排列内容  
* res 用来记录所有的排列顺序  
* visited 用来避免重复使用同一个数字


### [index21.js](./index21.js)
* 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。  
* 说明：解集不能包含重复的子集。  
* 示例: 输入: nums = [1,2,3]  
* 输出:  
* [  
* [3],  
* [1],  
* [2],  
* [1,2,3],  
* [1,3],  
* [2,3],  
* [1,2],  
* []  
* ]