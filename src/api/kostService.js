import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getKosts() {
    return apiClient.get('/kosts')
  },
  getKost(id) {
    return apiClient.get(`/kosts/${id}`)
  },
  createKost(kost) {
    return apiClient.post('/kosts', kost)
  }
}