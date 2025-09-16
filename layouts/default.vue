<template>
  <div class="app-root" :class="{ 'is-dimmed': isDimmed }">
    <TopNavbar />
    <Navbar @search-focus="toggleDim" />

    <div v-if="isDimmed" class="app-dim-overlay" @click="toggleDim(false)"></div>
    <div class="app-content">
      <nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import TopNavbar from '../components/TopNavbar.vue';
import { ref } from '@nuxtjs/composition-api'
import Footer from '../components/Footer.vue';
export default {
  components: { Navbar, TopNavbar, Footer },
  setup() {
    const isDimmed = ref(false)
    const toggleDim = (val) => { isDimmed.value = !!val }
    return { isDimmed, toggleDim }
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* Overlay dim */
.app-root { position: relative; }
.app-dim-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.35);
  z-index: 900; /* di bawah kedua navbar */
}

/* Pastikan konten berada di bawah overlay bila perlu */
.app-content { position: relative; z-index: 0; }

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
