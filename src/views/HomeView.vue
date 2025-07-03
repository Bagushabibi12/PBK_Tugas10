<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1>Temukan Kost Nyaman untuk Anda</h1>
        <p>Ribuan pilihan kost dengan fasilitas lengkap dan harga terjangkau</p>
        <router-link to="/kost" class="btn-primary">Cari Kost Sekarang</router-link>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>Mengapa Memilih Kami?</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">🏠</div>
            <h3>Banyak Pilihan</h3>
            <p>Ratusan kost di berbagai lokasi strategis</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>Harga Terjangkau</h3>
            <p>Mulai dari Rp 1 juta per bulan</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3>Aman dan Nyaman</h3>
            <p>Lokasi kost yang aman dan lingkungan nyaman</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  height: 70vh;
  display: flex;
  align-items: center;
  color: white;
  text-align: center;
}

.hero-content {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.btn-primary {
  background-color: #4CAF50;
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #45a049;
}

.features {
  padding: 4rem 0;
  background-color: #f9f9f9;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.features h2 {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  color: #333;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #4CAF50;
}
</style>