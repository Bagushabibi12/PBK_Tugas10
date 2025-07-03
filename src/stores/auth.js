import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = ref(null)

  function login(username, password) {
    // Ini hanya contoh, seharusnya ada API call
    if (username === 'admin' && password === 'admin123') {
      isAuthenticated.value = true
      user.value = { username, role: 'admin' }
      return true
    }
    return false
  }

  function logout() {
    isAuthenticated.value = false
    user.value = null
  }

  return { isAuthenticated, user, login, logout }
})