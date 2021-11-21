import axios from 'axios'
import {removePending, addPending} from '@/utils/index.js'

export default function request(config) {
  // 创建 axios 实例
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
  })

  // axios 拦截器
  // let cancel

  //添加请求拦截器

  /* instance.interceptors.request.use(
    config => {
      //在准备发请求前，取消未完成的请求
      if(typeof cancel === 'function'){
        cancel('请求强制取消')
      }
      //添加cancelToken的配置
      config.cancelToken = new axios.CancelToken(c => {
        cancel =c
      })
      return config
    }
  )
  //添加响应拦截器
  instance.interceptors.response.use(
    response => {
      cancel = null
      return response
    },
    error => {
      if(axios.isCancel(error)){
        console.log('上一次的请求被取消了')
        //中断Promise链接
        return new Promise(() => {})
      }else{
        // throw error
        return Promise.reject(error)
      }
    }
  ) */

  instance.interceptors.request.use(config => {
    removePending(config) // 在请求开始前，对之前的请求做检查取消操作
    addPending(config) // 将当前请求添加到 pending 中
    // other code before request
    return config
  }, error => {
    return Promise.reject(error)
  })
  
  instance.interceptors.response.use(response => {
    removePending(response) // 在请求结束后，移除本次请求
    return response
  }, error => {
    if (axios.isCancel(error)) {
      console.log('repeated request: ' + error.message)
    } else {
      // handle error code
    }
    return Promise.reject(error)
  })

  // 3. 发送网络请求
  return instance(config)
}
