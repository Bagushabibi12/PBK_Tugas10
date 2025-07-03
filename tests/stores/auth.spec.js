import { setActivePinia, createPinia } from 'pinia'
import { useAuthStore } from '../../src/stores/auth'
import { describe, expect, test, beforeEach } from 'vitest'

describe('Auth Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('login with correct credentials', () => {
    const authStore = useAuthStore()
    expect(authStore.isAuthenticated).toBe(false)
    
    const result = authStore.login('admin', 'admin123')
    expect(result).toBe(true)
    expect(authStore.isAuthenticated).toBe(true)
    expect(authStore.user).toEqual({ username: 'admin', role: 'admin' })
  })

  test('login with wrong credentials', () => {
    const authStore = useAuthStore()
    const result = authStore.login('wrong', 'credentials')
    expect(result).toBe(false)
    expect(authStore.isAuthenticated).toBe(false)
    expect(authStore.user).toBeNull()
  })

  test('logout', () => {
    const authStore = useAuthStore()
    authStore.login('admin', 'admin123')
    expect(authStore.isAuthenticated).toBe(true)
    
    authStore.logout()
    expect(authStore.isAuthenticated).toBe(false)
    expect(authStore.user).toBeNull()
  })
})