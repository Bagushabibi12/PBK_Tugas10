import { ref } from 'vue'
import kostService from '../api/kostService'

export default function useApi() {
  const loading = ref(false)
  const error = ref(null)

  const fetchKosts = async () => {
    loading.value = true
    try {
      const response = await kostService.getKosts()
      return response.data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    fetchKosts
  }
}