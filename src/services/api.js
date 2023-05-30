import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000'
})

export default {
  getCars () {
    return apiClient.get('/cars')
  },
  getServices () {
    return apiClient.get('/car_services')
  }

}
