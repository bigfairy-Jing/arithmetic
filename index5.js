// 提出问题： 设计一个支持以下两种操作的数据结构：

// void addWord(word)
// bool search(word)
// search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
// . 可以表示任何一个字母。

// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true

const WordDictionary = function (){
  this.words = {}
}

WordDictionary.prototype.addWord = function (word) {
  if(this.words[word.length]){
    this.words[word.length].push(word)
  }else {
    this.words[word.length] = [word]
  }
}

WordDictionary.prototype.search = function (word) {
  if(!this.words[word.length]) return false
  const len = word.length

  if(!word.includes('.')) return this.words[len].includes(word)

  const reg = new RegExp(word)
  return this.words[len].some(item=> reg.test(item))
}