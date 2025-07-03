<template>
  <div class="kost-list">
    <div class="container">
      <h1>Daftar Kost Tersedia</h1>
      
      <div class="search-filter">
        <div class="search-box">
          <input 
            type="text" 
            placeholder="Cari berdasarkan lokasi atau nama kost..." 
            v-model="searchQuery"
          >
          <button @click="handleSearch" class="btn-search">
            <i class="fas fa-search"></i> Cari
          </button>
        </div>
        
        <div class="price-filter">
          <label>Filter Harga:</label>
          <select v-model="priceFilter">
            <option value="">Semua Harga</option>
            <option value="1">≤ Rp 1.5 juta</option>
            <option value="2">Rp 1.5 - 2.5 juta</option>
            <option value="3">≥ Rp 2.5 juta</option>
          </select>
        </div>
      </div>

      <div v-if="kostStore.loading" class="loading">Memuat data...</div>
      
      <div v-else-if="filteredKosts.length === 0" class="empty-state">
        Tidak ada kost yang ditemukan
      </div>

      <div v-else class="kost-grid">
        <div v-for="kost in filteredKosts" :key="kost.id" class="kost-card">
          <img :src="kost.image" :alt="kost.name" class="kost-image">
          <div class="kost-info">
            <h2>{{ kost.name }}</h2>
            <p class="price">Rp {{ kost.price.toLocaleString('id-ID') }}/bulan</p>
            <p class="address">{{ kost.address }}</p>
            <div class="facilities">
              <span v-for="(facility, index) in kost.facilities.slice(0, 3)" :key="index">
                {{ facility }}
              </span>
              <span v-if="kost.facilities.length > 3">+{{ kost.facilities.length - 3 }} lagi</span>
            </div>
            <router-link :to="'/kost/' + kost.id" class="btn-detail">Lihat Detail</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useKostStore } from '../../stores/kost'
import { useAuthStore } from '../../stores/auth'

const kostStore = useKostStore()
const authStore = useAuthStore()

const searchQuery = ref('')
const priceFilter = ref('')

onMounted(async () => {
  await kostStore.fetchKosts()
})

const handleSearch = () => {
  // Fungsi ini bisa digunakan untuk logika pencarian tambahan
  console.log('Melakukan pencarian:', searchQuery.value)
}

const filteredKosts = computed(() => {
  let filtered = kostStore.kosts
  
  // Filter berdasarkan pencarian
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(kost => 
      kost.address.toLowerCase().includes(query) ||
      kost.name.toLowerCase().includes(query)
    )
  }
  
  // Filter berdasarkan harga
  if (priceFilter.value) {
    switch (priceFilter.value) {
      case '1':
        filtered = filtered.filter(kost => kost.price <= 1500000)
        break
      case '2':
        filtered = filtered.filter(kost => kost.price > 1500000 && kost.price <= 2500000)
        break
      case '3':
        filtered = filtered.filter(kost => kost.price > 2500000)
        break
    }
  }
  
  return filtered
})
</script>

<style scoped>
.kost-list {
  padding: 2rem 0;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.search-filter {
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.search-box {
  display: flex;
  gap: 0.5rem;
}

.search-box input {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.btn-search {
  padding: 0 1.5rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.price-filter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.price-filter label {
  font-weight: 500;
}

.price-filter select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.kost-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.kost-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.kost-card:hover {
  transform: translateY(-5px);
}

.kost-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.kost-info {
  padding: 1.5rem;
}

.kost-info h2 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #4CAF50;
}

.price {
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.address {
  color: #666;
  margin-bottom: 1rem;
}

.facilities {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.facilities span {
  background-color: #f0f0f0;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
}

.btn-detail {
  display: inline-block;
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn-detail:hover {
  background-color: #45a049;
}

.loading, .empty-state {
  text-align: center;
  padding: 2rem;
  color: #666;
}

@media (max-width: 768px) {
  .kost-grid {
    grid-template-columns: 1fr;
  }
  
  .search-box {
    flex-direction: column;
  }
  
  .btn-search {
    justify-content: center;
  }
  
  .price-filter {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>