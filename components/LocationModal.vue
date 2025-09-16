
<template>
  <div class="modal-overlay" @click.self="$emit('close')">
    <div class="modal-content">
      <!-- Header Modal -->
      <div class="modal-header">
        <div>
          <h3>Mau di kirim kemana?</h3>
          <p>Pilih alamat yang paling pas buatmu, agar belanja di Alfagift lebih mudah.</p>
        </div>
        <button class="close-button" @click="$emit('close')">
          <b-icon icon="x" font-scale="1.5"></b-icon>
        </button>
      </div>

      <!-- Benefit Delivery (Collapsible) -->
      <div class="benefit-section">
        <div class="benefit-toggle" @click="benefitVisible = !benefitVisible">
          <img src="/delivery-scooter.png" alt="Delivery" class="scooter-icon">
          <span>Lihat benefit delivery di sini</span>
          <b-icon :icon="benefitVisible ? 'chevron-up' : 'chevron-down'" class="chevron-icon"></b-icon>
        </div>
        <b-collapse v-model="benefitVisible" class="benefit-details">
          <b-card>
            <p class="card-text">Detail benefit pengiriman akan ditampilkan di sini.</p>
          </b-card>
        </b-collapse>
      </div>

      <!-- Daftar Alamat -->
      <div class="address-list">
        <div v-for="address in addresses" :key="address.id" 
             class="address-card" 
             :class="{ 'selected': address.isSelected }">
          
          <div class="address-info">
            <div class="address-header">
              <span class="address-label">{{ address.label }}</span>
              <span v-if="address.isPrimary" class="primary-badge">Alamat Utama</span>
            </div>
            <p class="address-name">{{ address.name }}</p>
            <p class="address-phone">{{ address.phone }}</p>
            <p class="address-details">{{ address.details }}</p>
            <div v-if="address.isVerified" class="verified-location">
              <b-icon icon="geo-alt-fill" class="verified-icon"></b-icon>
              <span>Lokasi Sudah Ditandai</span>
            </div>
          </div>

          <div class="address-action">
            <button v-if="address.isSelected" class="action-button-selected">Alamat Terpilih</button>
            <button v-else class="action-button-default">Pilih</button>
          </div>
        </div>
      </div>

      <!-- Tambah Alamat Baru -->
      <div class="add-address-section">
        <h4>Mau pakai alamat lain?</h4>
        <p>Tidak ada lokasi yang pas buatmu? Silahkan buat alamat baru.</p>
        <button class="add-address-button">Tambah Alamat</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocationModal',
  data() {
    return {
      benefitVisible: false,
      addresses: [
        {
          id: 1,
          label: 'kos',
          name: 'adhi septian',
          phone: '085156441371',
          details: 'jl baru no 301b, Jl. Baru No.301b, RW.07, Sidorejo Lor, Kec. Sidorejo, Kota Salatiga, Jawa Tengah 50714, Indonesia',
          isPrimary: true,
          isSelected: true,
          isVerified: true,
        },
        {
          id: 2,
          label: 'apart',
          name: 'adhi',
          phone: '085156441371',
          details: 'paddington unit 2901, Alam Sutera, Jl. Lingkar Barat No.RT.001, RT.001/RW.004, Panunggangan, Kec. Pinang, Kota Tangerang, Banten 15143, Indonesia',
          isPrimary: false,
          isSelected: false,
          isVerified: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

/* Konten Modal */
.modal-content {
  background: #fff;
  padding: 24px;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
}

/* Header */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #eee;
  padding-bottom: 16px;
  margin-bottom: 16px;
}
.modal-header h3 {
  font-size: 22px;
  font-weight: 700;
  margin: 0;
}
.modal-header p {
  font-size: 14px;
  color: #666;
  margin: 4px 0 0;
}
.close-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
}

/* Benefit Section */
.benefit-section {
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 24px;
}
.benefit-toggle {
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  font-size: 14px;
}
.scooter-icon {
  width: 40px;
  margin-right: 12px;
}
.chevron-icon {
  margin-left: auto;
  color: #007bff;
}
.benefit-details {
  font-size: 13px;
  background-color: #f9f9f9;
}

/* Address List */
.address-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
}
.address-card.selected {
  border: 2px solid #d3161c;
}
.address-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}
.address-label {
  font-weight: 600;
}
.primary-badge {
  background-color: #d3161c;
  color: #fff;
  font-size: 10px;
  padding: 2px 8px;
  border-radius: 12px;
  font-weight: 600;
}
.address-info p {
  font-size: 14px;
  color: #666;
  margin: 4px 0;
}
.address-info .address-name {
  font-weight: 600;
  color: #222;
}
.verified-location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #007bff;
  margin-top: 12px;
}
.verified-icon {
  color: #007bff;
}

/* Tombol Aksi Alamat */
.address-action {
  display: flex;
  align-items: center;
}
.action-button-selected {
  background-color: #d3161c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 6px 12px;
  font-weight: 600;
  font-size: 13px;
}

.action-button-default {
  background-color: #fff;
  color: #d3161c;
  border: 1px solid #d3161c;
  border-radius: 8px;
  padding: 10px 24px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
}

/* Tambah Alamat */
.add-address-section {
  text-align: center;
  padding: 24px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.add-address-section h4 {
  font-weight: 700;
}
.add-address-section p {
  font-size: 14px;
  color: #666;
}
.add-address-button {
  background-color: #d3161c;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
}
</style>
```