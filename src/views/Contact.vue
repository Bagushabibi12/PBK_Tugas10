<template>
  <div class="contact-page">
    <h1>Hubungi Kami</h1>
    <div class="contact-content">
      <div class="contact-info">
        <h2>Informasi Kontak</h2>
        <p><strong>Email:</strong> info@kostku.com</p>
        <p><strong>Telepon:</strong> (021) 1234-5678</p>
      </div>
      
      <div class="contact-form">
        <h2>Kirim Pesan</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label>Nama</label>
            <input type="text" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label>Pesan</label>
            <textarea v-model="form.message" required></textarea>
          </div>
          <button type="submit">Kirim</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      alert('Pesan terkirim!');
      this.form = {
        name: '',
        email: '',
        message: ''
      };
    }
  }
}
</script>

<style scoped>
.contact-page {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-content {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.contact-info, .contact-form {
  flex: 1;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
  }
}
</style>