<style scoped>
/* Tinggi bar tipis dan latar putih */
.topbar {
  background: #fff;
  min-height: 36px;            /* tinggi total bar */
  padding-top: 4px;
  padding-bottom: 4px;
  border-bottom: 1px solid #eee;
  position: sticky;            /* tetap di atas saat scroll */
  top: 0;
  z-index: 1001; /* di atas overlay dan navbar utama */
}

/* Kontainer tengah dan lebar maksimum konten */
.topbar__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;             /* ukuran teks dasar topbar */
  max-width: 1240px;           /* samakan dengan konten halaman */
  margin: 0 auto;              /* center */
  padding: 0 8px;              /* sisi kiri-kanan tipis */
}

/* Kelompok kiri: ikon + label + lokasi */
.topbar__left {
  display: flex;
  align-items: center;
  gap: 6px;                    /* jarak antar item lebih rapat */
  margin-left: 8px;            /* geser cluster kiri sedikit ke kanan */
}

/* Ikon lokasi kecil, sejajar vertikal */
.topbar__icon {
  font-size: 14px;             /* ukuran ikon */
  color: #6c757d;
  transform: translateY(-1px); /* sejajarkan dengan teks */
}

/* Label “Kirim ke:” lebih halus */
.topbar__label {
  font-size: 13px;
  color: #6c757d;
  margin-right: 4px;           /* jarak ke “kos” */
}

/* Teks lokasi “kos” tebal sedikit */
.topbar__location {
  font-size: 13px;
  font-weight: 600;
  color: #222;
  margin-left: 2px;
}

/* Kelompok kanan: tiga link rapat */
.topbar__right {
  display: flex;
  align-items: center;
  gap: 16px;                   /* jarak antar link */
  margin-right: 8px;           /* beri nafas kanan */
}

.custom-dropdown {
  position: relative;
}

.topbar__link{
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  padding: 0;
  color: #6c757d;
  font-size: 13px;
  cursor: pointer;
}

.topbar__link:focus{
  outline: none;
  box-shadow: none;
}

.topbar__link:hover{
  color: #343a40;
}
.app-download-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 12px;
  z-index: 10;

  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  display: flex ;
  gap: 16px;
  padding: 12px;
}

.app-download-dropdown__qr img {
  display: block;
  width: 135px;
  height: 135px;
  border: 2px solid #d3161c;
  border-radius: 6px;
}

.app-download-dropdown__links {
  display: flex;
  flex-direction: column;
}

.app-download-dropdown__links p {
  font-size: 13px;
  color: #333;
  margin-bottom: 10px;
}

.app-download-dropdown__links .store-badge {
  display: block;
  margin-bottom: 8px;
}

.app-download-dropdown__links .store-badge:last-child {
  margin-bottom: 0;
}

.app-download-dropdown__links .store-badge img {
  height: 40px;
  width: auto;
}

/* Responsive: boleh sembunyikan link ke-2 di layar sempit */
@media (max-width: 768px) {
  .topbar__right .topbar__link:nth-child(2) { display: none; }
}
</style>

<template>
  <b-navbar type="light" variant="light" class="border-bottom topbar">
    <b-container fluid class="topbar__container">
        <button class="topbar__left" @click="isLocationModalOpen = true">
          <b-icon icon="geo-alt-fill" class="topbar__icon" />
          <span class="topbar__label">Kirim ke:</span>
          <span class="topbar__location">kos</span>
        </button>

      <div class="topbar__right">
        <span class="topbar__link">Layanan Pelanggan</span>
        <span class="topbar__link">Jelajahi Alfagift</span>
      <div class="custom-dropdown">
          <!-- Tombol Pemicu -->
          <button class="topbar__link" @click="toggleDropdown">
            <b-icon icon="phone" class="topbar__icon" />
            <span>Download Alfagift App</span>
          </button>

          <!-- Konten Dropdown (muncul/hilang) -->
          <div v-if="isDropdownOpen" class="app-download-dropdown">
            <div class="app-download-dropdown__qr">
              <img src="/qr-alfa.jpg" alt="QR Code" />
            </div>
            <div class="app-download-dropdown__links">
              <p>Scan QR atau <br>download dari:</p>
              <a href="https://play.google.com/store/apps/details?id=com.alfamart.alfagift" class="store-badge">
                <img src="/play-store-btn.png" alt="Google Play Store" />
              </a>
              <a href="https://apps.apple.com/id/app/alfagift-alfamart-online-shop/id1013717463" class="store-badge">
                <img src="/app-store-btn.png" alt="Apple App Store" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </b-navbar>
</template>


<script>
export default {
  name: "TopNavbar",
  data(){
    return{
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    CloseDropdown() {
      if (!this.$el.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.CloseDropdown);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.CloseDropdown);
  }
};
</script>