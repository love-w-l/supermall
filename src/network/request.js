import axios from 'axios'

export function request(config){
  return new Promise((resolve,reject)=>{
    const intance = axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:20000
    })

    intance.interceptors.response.use(res=>{
      return res.data
    })

    intance(config)
      .then(data=>{
        resolve(data)
      })
      .catch(error=>{
        reject(error)
      })
  })
}

export function requestgoods(config){
  return new Promise((resolve,reject)=>{
    const instance = axios.create({
      baseURL:'http://152.136.185.210:8000/api/n3',
      timeout:20000
    })
    instance(config)
      .then(data=>{
        resolve(data)
      })
      .catch(error=>{
        reject(error)
      })
  })
}

