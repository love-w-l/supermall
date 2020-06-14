export function debounce(func, delay) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func
      console.log('---')
    }, delay)
  }
}

//转换时间戳
export function formatData(date,fmt){

  //获取输入的y显示的格式
  if(/(y+)/.test(fmt)){
    fmt = fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4-RegExp.$1.length))
  }
//  获取年其他的显示格式
  let o = {
    'M+':date.getMonth() + 1,
    'd+':date.getDate(),
    'h+':date.getHours(),
    'm+':date.getMinutes(),
    's+':date.getSeconds()
  };
  for (let k in o){
    if (new RegExp(`(${k})`).test(fmt)){
      let str = o[k]+''
      fmt = fmt.replace(RegExp.$1,(RegExp.$1.length===1)?str:padLeftZero(str))
    }
  }
  return fmt
}
function padLeftZero(str){
  return ('00'+str).substr(str.length)
}
