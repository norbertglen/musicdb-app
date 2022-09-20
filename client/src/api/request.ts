import axios from 'axios'

export const DeeverRequest = axios.create({
  baseURL: '/api',
  timeout: 15000, // 15 seconds,
})
DeeverRequest.interceptors.response.use(
  (response) => {
    return response?.data?.payload
  },
  (error) => {
    if (error.response) {
      return Promise.reject(error.response.data)
    }
    if (error.request) {
      console.log(error.request)
      return Promise.reject(
        new Error('No response was received from the server')
      )
    }
    console.log('Error', error.message)

    return Promise.reject(error)
  }
)
export default DeeverRequest
