<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="logo">KOSTKU</router-link>
      <div class="nav-links">
        <router-link to="/">Home</router-link>
        <router-link to="/kost">Cari Kost</router-link>
        <router-link to="/about">Tentang Kami</router-link>
        <router-link to="/contact">Kontak</router-link>
        <router-link v-if="!authStore.isAuthenticated" to="/login" class="login-btn">Login</router-link>
        <router-link v-if="authStore.isAuthenticated" to="/dashboard" class="dashboard-btn">Dashboard</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
const authStore = useAuthStore()
</script>

<style scoped>
.navbar {
  background-color: #4CAF50;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
  padding: 0.5rem 0;
  position: relative;
}

.nav-links a:hover {
  opacity: 0.8;
}

.nav-links a.router-link-active {
  font-weight: bold;
}

.nav-links a.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: white;
}

.login-btn, .admin-btn {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: white;
  color: #4CAF50 !important;
  font-weight: bold;
}

@media (max-width: 768px) {
  .nav-links {
    gap: 1rem;
  }
}
</style>