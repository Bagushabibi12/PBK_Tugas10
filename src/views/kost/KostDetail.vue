<template>
  <div class="kost-detail-page">
    <div v-if="kostStore.loading" class="loading-state">
      <div class="spinner"></div>
      <p>Memuat detail kost...</p>
    </div>

    <div v-else-if="kostStore.error" class="error-state">
      <i class="fas fa-exclamation-triangle"></i>
      <h3>Gagal memuat detail kost</h3>
      <p>{{ kostStore.error }}</p>
      <router-link to="/kost" class="back-btn">Kembali ke Daftar Kost</router-link>
    </div>

    <div v-else-if="kost" class="container">
      <!-- Breadcrumb -->
      <div class="breadcrumb">
        <router-link to="/">Home</router-link>
        <span>/</span>
        <router-link to="/kost">Daftar Kost</router-link>
        <span>/</span>
        <span>{{ kost.name }}</span>
      </div>

      <!-- Kost Gallery -->
      <div class="kost-gallery">
        <div class="main-image">
          <img :src="kost.image || 'https://via.placeholder.com/800x500'" :alt="kost.name">
        </div>
        <div class="thumbnail-grid">
          <div class="thumbnail" v-for="(img, index) in galleryImages" :key="index">
            <img :src="img" :alt="'Gambar ' + (index + 1)">
          </div>
        </div>
      </div>

      <!-- Kost Info -->
      <div class="kost-info-section">
        <div class="main-info">
          <h1>{{ kost.name }}</h1>
          <p class="location"><i class="fas fa-map-marker-alt"></i> {{ kost.location }}</p>
          
          <div class="price-section">
            <p class="price">Rp {{ kost.price.toLocaleString('id-ID') }}/bulan</p>
            <p class="availability">Tersedia: {{ availableRooms }} kamar</p>
          </div>
          
          <div class="facilities">
            <h3><i class="fas fa-list"></i> Fasilitas:</h3>
            <ul>
              <li v-for="(facility, index) in kost.facilities" :key="index">
                <i class="fas fa-check"></i> {{ facility }}
              </li>
            </ul>
          </div>
          
          <div class="description">
            <h3><i class="fas fa-align-left"></i> Deskripsi:</h3>
            <p>{{ kost.description }}</p>
          </div>
        </div>
        
        <div class="sidebar">
          <div class="booking-card">
            <h3>Pesan Sekarang</h3>
            <div class="price-info">
              <p>Harga per bulan:</p>
              <p class="price">Rp {{ kost.price.toLocaleString('id-ID') }}</p>
            </div>
            <button class="book-btn">Hubungi Pemilik</button>
            <div class="contact-info">
              <p><i class="fas fa-phone"></i> 0812-3456-7890</p>
              <p><i class="fas fa-envelope"></i> pemilik@kost.com</p>
            </div>
          </div>
          
          <div class="map-card">
            <h3><i class="fas fa-map"></i> Lokasi</h3>
            <div class="map-placeholder">
              <i class="fas fa-map-marker-alt"></i>
              <p>Peta lokasi kost</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div v-else class="not-found">
      <h2>Kost tidak ditemukan</h2>
      <router-link to="/kost" class="back-btn">Kembali ke Daftar Kost</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useKostStore } from '../../stores/kost'

const route = useRoute()
const kostStore = useKostStore()

onMounted(() => {
  kostStore.fetchKostById(route.params.id)
})

const kost = computed(() => kostStore.selectedKost)
const availableRooms = computed(() => Math.floor(Math.random() * 5) + 1)

// Contoh gambar gallery
const galleryImages = computed(() => [
  kost.value.image || 'https://via.placeholder.com/300x200',
  'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
])
</script>

<style scoped>
.kost-detail-page {
  padding: 40px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.loading-state {
  text-align: center;
  padding: 100px 0;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-state, .not-found {
  text-align: center;
  padding: 100px 0;
}

.error-state i {
  font-size: 3rem;
  color: #e74c3c;
  margin-bottom: 20px;
}

.error-state h3, .not-found h2 {
  margin-bottom: 15px;
}

.back-btn {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  margin-top: 20px;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
  font-size: 0.9rem;
}

.breadcrumb a {
  color: var(--gray-color);
  text-decoration: none;
}

.breadcrumb a:hover {
  color: var(--primary-color);
}

.breadcrumb span {
  color: #ccc;
}

.kost-gallery {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-bottom: 40px;
}

.main-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

.thumbnail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.thumbnail img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: transform 0.3s;
}

.thumbnail img:hover {
  transform: scale(1.05);
}

.kost-info-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

.main-info h1 {
  margin-bottom: 10px;
  color: var(--dark-color);
}

.location {
  color: var(--gray-color);
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.price-section {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 25px 0;
  padding: 20px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.price {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--primary-color);
}

.availability {
  background-color: #e8f5e9;
  color: #2e7d32;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.9rem;
}

.facilities, .description {
  margin-bottom: 30px;
}

.facilities h3, .description h3 {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--dark-color);
}

.facilities h3 i, .description h3 i {
  color: var(--primary-color);
}

.facilities ul {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.facilities li {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.facilities i {
  color: var(--primary-color);
  font-size: 0.8rem;
}

.description p {
  line-height: 1.8;
  color: #555;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.booking-card, .map-card {
  background-color: white;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.booking-card h3, .map-card h3 {
  margin-top: 0;
  margin-bottom: 20px;
  color: var(--dark-color);
  display: flex;
  align-items: center;
  gap: 10px;
}

.booking-card h3 i, .map-card h3 i {
  color: var(--primary-color);
}

.price-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.book-btn {
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 20px;
}

.book-btn:hover {
  background-color: #3aa876;
}

.contact-info {
  font-size: 0.9rem;
}

.contact-info p {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  color: var(--gray-color);
}

.contact-info i {
  width: 20px;
  color: var(--primary-color);
}

.map-placeholder {
  height: 200px;
  background-color: #f5f5f5;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--gray-color);
}

.map-placeholder i {
  font-size: 2rem;
  margin-bottom: 10px;
  color: var(--primary-color);
}

@media (max-width: 992px) {
  .kost-gallery {
    grid-template-columns: 1fr;
  }
  
  .thumbnail-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .kost-info-section {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .facilities ul {
    grid-template-columns: 1fr;
  }
  
  .thumbnail-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>