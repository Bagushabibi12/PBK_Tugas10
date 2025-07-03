<template>
  <div class="about">
    <div class="container">
      <h1>Tentang Kami</h1>
      <div class="about-content">
        <div class="about-text">
          <p>KOSTKU adalah platform pencarian kost online yang membantu Anda menemukan tempat tinggal yang nyaman dan sesuai dengan kebutuhan.</p>
          <p>Kami bekerja sama dengan pemilik kost terpercaya untuk menyediakan pilihan kost terbaik di berbagai lokasi strategis.</p>
          <p>Dengan pengalaman lebih dari 5 tahun di industri properti, kami memahami betul kebutuhan para pencari kost.</p>
        </div>
        <div class="about-image">
          <img src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Tentang Kami">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  padding: 4rem 0;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.about-text p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  color: #555;
}

.about-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .about-content {
    grid-template-columns: 1fr;
  }
  
  .about-image {
    order: -1;
  }
}
</style>