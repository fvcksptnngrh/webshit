<template>
  <b-container fluid class="achievements-section p-0">
    <img :src="src" :alt="alt" class="achievements-img" loading="eager" />
  </b-container>
</template>

<script>
export default {
  name: 'Achievements',
  props: {
    src: { type: String, required: true },  // contoh: '/promos/alfagift-banner.gif'
    alt: { type: String, default: 'Achievements Banner' }
  }
}
</script>

<style scoped>
.achievements-section { padding: 0; }

/* Banner full-width, tinggi nyaman di berbagai layar */
.achievements-img{
  display: block;
  width: 100%;
  height: auto;          /* default: ikut rasio gambar */
  max-height: 380px;     /* desktop */
  object-fit: cover;     /* isi lebar, crop atas/bawah jika perlu */
  object-position: center;
}

@media (max-width: 992px){
  .achievements-img{ max-height: 300px; }
}
@media (max-width: 576px){
  .achievements-img{ max-height: 220px; }
}
</style>