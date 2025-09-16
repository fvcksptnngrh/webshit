<template>
  <b-container fluid class="p-0 banner-section">
    <b-carousel
      id="multi-banner-carousel"
      v-model="current"
      controls
      :indicators="false"
      background="#ffffff"
      :interval="4000"
    >
      <!-- Loop untuk setiap slide -->
      <b-carousel-slide v-for="(slide, index) in slides" :key="index">
        <template #img>
          <b-row no-gutters>
            <b-col
              v-for="(banner, i) in slide"
              :key="i"
              cols="6"
              class="px-2"
            >
              <a :href="banner.link">
                <b-img
                  :src="banner.image"
                  fluid
                  :alt="banner.alt"
                  class="banner-img"
                />
              </a>
            </b-col>
          </b-row>
        </template>
      </b-carousel-slide>
    </b-carousel>

  <div class="banner-footer">
      <ul class="banner-dots" role="tablist">
        <li
          v-for="(s, i) in slides"
          :key="i"
          :class="['banner-dot', { active: i === current }]"
          @click="current = i"
          @keydown.enter.space="current = i"
          role="button"
          tabindex="0"
          :aria-label="`Slide ${i + 1}`"
        />
      </ul>

      <a href="#" class="lihat-semua-link">Lihat Semua &gt;</a>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
    current: 0,
      banners: [
        { image: "/banner.jpeg", link: "#", alt: "Promo 1" },
        { image: "/banner1.jpeg", link: "#", alt: "Promo 1" },
        { image: "/banner4.jpeg", link: "#", alt: "Promo 2" },
        { image: "/banner3.jpeg", link: "#", alt: "Promo 3" },
        { image: "/banner2.jpeg", link: "#", alt: "Promo 4" },
        { image: "/banner5.jpeg", link: "#", alt: "Promo 5" },
        { image: "/banner6.jpeg", link: "#", alt: "Promo 6" },
        { image: "/banner7.jpeg", link: "#", alt: "Promo 7" },
      ]
    }
  },
  computed: {
    slides() {
      const result = []
      for (let i = 0; i < this.banners.length; i += 2) {
        result.push(this.banners.slice(i, i + 2))
      }
      return result
    }
  }
}
</script>

<style>
.banner-section {
  max-width: 1200px;
  margin: 20px auto;
}

.banner-img {
  border-radius: 8px;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.lihat-semua {
  text-align: right;
  margin-top: 10px;
}
.lihat-semua a {
  color: #007bff;
  font-size: 14px;
  text-decoration: none;
}

.banner-footer {
  display: flex;
  align-items: center;
  justify-content: space-between; /* dot kiri, link kanan */
  margin-top: 20px;
  padding: 0 20px; /* sejajarkan dengan padding px-2 pada kolom */
}

.banner-dots {
  display: flex;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.banner-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #d9d9d9;
  cursor: pointer;
}
.banner-dot.active {
  background: #d80000;
}

/* Link lihat semua */
.lihat-semua-link {
  color: #007bff;
  font-size: 14px;
  text-decoration: none;
}

.lihat-semua-link:hover { text-decoration: underline; }

/* Pastikan transisi geser aktif */
#multi-banner-carousel .carousel-inner { overflow: hidden; border-radius: 8px; }
#multi-banner-carousel .carousel-item { transition: transform .6s ease-in-out; }


</style>