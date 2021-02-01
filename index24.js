// 3.请使用原生代码实现一个Events模块，可以实现自定义事件的订阅、触发、移除功能

// const fn1 = (... args)=>console.log('I want sleep1', ... args)
// const fn2 = (... args)=>console.log('I want sleep2', ... args)
// const event = new Events();
// event.on('sleep', fn1, 1, 2, 3);
// event.on('sleep', fn2, 1, 2, 3);
// event.fire('sleep', 4, 5, 6);
// // I want sleep1 1 2 3 4 5 6
// // I want sleep2 1 2 3 4 5 6
// event.off('sleep', fn1);
// event.once('sleep', ()=>console.log('I want sleep));
// event.fire('sleep');

class Events {
  constructor(){
    this._events = {}
  }
  on(name, fn, ...argOrg){
    if(!name || !fn) throw new Error('Filed to arguments')
    const fns = this._events[name] || []
    if(fns.find(f=>f.fnOrg === fn)) return

    this._events[name] = fns.concat({
      fn: arg => fn.apply(null, [...argOrg, ...arg]),
      fnOrg: fn
    })
  }

  once(name, fn, ...argOrg){
    const onFn = (...arg) => {
      fn.apply(null, arg)
      this.off(name, onFn)
    }
    this.on(name, onFn, ...argOrg)
  }
  emit(name, ...arg){
    (this._events[name] || []).forEach(item => item.fn(arg))
  }
  off(name, fn){
    const argLen = arguments.length
    if(!argLen) this._events = Object.create(null)
    if(argLen === 1) delete this._events[name]
    let fns = this._events[name]
    if(!fns || !fns.length) return
    this._events[name] = (fns||[]).filter(item=> item.fnOrg !== fn)
  }
}