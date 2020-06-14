import toast from "./toast";
const obj = {}

//当使用install方法时.默认传入一个Vue参数
obj.install = function (Vue) {

  //1,创建组件构造器
  const tosatconstructor = Vue.extend(toast)
  //2.new的方式,根据组件构造器,可以创建出来一个组件对象
  const Toast = new tosatconstructor()
  //3.将组件对象,挂载到某一个元素上
  Toast.$mount(document.createElement('div'))
  //4.Toast.$el对应的就是div
  document.body.appendChild(Toast.$el)

  //5.将Toast组件挂载到Vue原型上
  Vue.prototype.$toast = Toast

}

export default  obj
