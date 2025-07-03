import { mount } from '@vue/test-utils'
import { describe, expect, test, beforeEach, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useKostStore } from '../../src/stores/kost'
import KostList from '../../src/views/kost/KostList.vue'

describe('KostList Component', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    
    const kostStore = useKostStore()
    kostStore.kosts = [
      {
        id: 1,
        name: 'Test Kost 1',
        price: 1500000,
        address: 'Test Address 1',
        facilities: ['AC', 'WiFi'],
        image: 'test1.jpg'
      }
    ]
  })

  test('renders kost list correctly', () => {
    const wrapper = mount(KostList)
    
    expect(wrapper.text()).toContain('Daftar Kost Tersedia')
    expect(wrapper.text()).toContain('Test Kost 1')
    expect(wrapper.text()).toContain('Rp 1,500,000/bulan')
    expect(wrapper.text()).toContain('Test Address 1')
  })

  test('filters kosts based on search query', async () => {
    const wrapper = mount(KostList)
    
    await wrapper.find('input').setValue('Address 1')
    expect(wrapper.text()).toContain('Test Kost 1')
    
    await wrapper.find('input').setValue('Non-existent')
    expect(wrapper.text()).not.toContain('Test Kost 1')
  })
})