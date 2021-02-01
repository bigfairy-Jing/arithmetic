//  DOM 的体积过大会影响页面性能，假如你想在用户关闭页面时统计（计算并反馈给服务器）
//  当前页面中元素节点的数量总和、元素节点的最大嵌套深度以及最大子元素个数，请用 JS 配合
//  原生 DOM API 实现该需求（不用考虑陈旧浏览器以及在现代浏览器中的兼容性，可以使用任意
//  浏览器的最新特性；不用考虑 shadow DOM）。比如在如下页面中运行后：

function getEleDepth(ele) {
  let funnum = 1
  const fuele = ele.parentNode
  if(fuele !== document){
    funnum++
    ele = fuele
    return getEleDepth(ele)
  }else return funnum
}

function getEleSubNum(ele) {
  let zieles = ele.childNodes
  let zinum = 0
  zieles.forEach(el=>{
    if(el.nodeName !== '#text') zinum++
  })
  return zinum
}

const totalElements = Array.from(document.getElementsByTagName("*"))

const maxDOMTreeDepth = Math.max(...totalElements.map(ele=>getEleDepth(ele)))

const maxChildrenCount = Math.max(...totalElements.map(ele=>getEleSubNum(ele)))

const obj = {
  totalElementsCount:totalElements.length,
  maxDOMTreeDepth,
  maxChildrenCount
}