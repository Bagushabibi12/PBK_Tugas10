<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="logo">KostKu</router-link>
    </div>
    <div class="navbar-links">
      <router-link to="/">Beranda</router-link>
      <router-link to="/about">Tentang Kami</router-link>
      <router-link to="/contact">Kontak</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #42b983;
  color: white;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
}

.navbar-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.navbar-links a.router-link-exact-active {
  border-bottom: 2px solid white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}
</style>