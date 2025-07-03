<template>
  <div class="dashboard-container">
    <h1>Admin Dashboard</h1>
    
    <div class="stats-cards">
      <div class="stat-card">
        <h3>Total Kost</h3>
        <p class="count">{{ totalKost }}</p>
      </div>
      
      <div class="stat-card">
        <h3>Kost Terbaru</h3>
        <p class="newest">{{ newestKost || 'Belum ada data' }}</p>
      </div>
    </div>

    <div class="quick-actions">
      <router-link to="/kost/manage" class="action-btn">
        <i class="fas fa-plus"></i> Kelola Kost
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useKostStore } from '../../stores/kost'

const kostStore = useKostStore()

const totalKost = computed(() => kostStore.kosts.length)
const newestKost = computed(() => {
  return kostStore.kosts.length > 0 
    ? kostStore.kosts[kostStore.kosts.length - 1].name 
    : null
})
</script>

<style scoped>
.dashboard-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.stat-card h3 {
  color: #666;
  margin-bottom: 0.5rem;
}

.count {
  font-size: 2rem;
  font-weight: bold;
  color: #4CAF50;
}

.newest {
  font-size: 1.2rem;
  color: #333;
}

.quick-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.action-btn {
  padding: 1rem 1.5rem;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background-color 0.3s;
}

.action-btn:hover {
  background-color: #45a049;
}

@media (max-width: 768px) {
  .quick-actions {
    flex-direction: column;
  }
}
</style>