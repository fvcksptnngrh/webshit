<template>
  <transition name="desc-fade">
    <div
      v-if="visible"
      class="desc-overlay"
      role="dialog"
      aria-modal="true"
      :aria-label="product?.name || 'Deskripsi Produk'"
      @keydown.esc.prevent="$emit('close')"
    >
      <div class="desc-backdrop" @click="$emit('close')" />
      <div class="desc-panel" ref="panel">
        <button class="close-btn" @click="$emit('close')" aria-label="Tutup">
          ✕
        </button>

        <div class="desc-header">
          <img
            v-if="product?.image"
            :src="product.image"
            :alt="product?.name"
            class="desc-image"
          />
          <div class="desc-title-wrap">
            <h3 class="desc-title">{{ product?.name || 'Produk' }}</h3>
            <p class="desc-sub" v-if="product?.brand">{{ product.brand }}</p>
          </div>
        </div>

        <div class="desc-body">
          <h4 class="desc-section-title">Deskripsi</h4>
          <p class="desc-text">
            {{ descriptionText }}
          </p>

          <div v-if="product?.tags?.length" class="tags">
            <span
              v-for="(t,i) in product.tags"
              :key="i"
              class="tag"
            >{{ t }}</span>
          </div>
        </div>

        <div class="desc-footer">
          <b-button
            variant="danger"
            size="sm"
            class="w-100"
            @click="$emit('close')"
          >Tutup</b-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ProductDescriptionPopup',
  props: {
    visible: { type: Boolean, default: false },
    product: { type: Object, default: null }
  },
  computed: {
    descriptionText() {
      if (!this.product) return 'Data produk belum tersedia.'
      return this.product.description ||
        'Belum ada deskripsi untuk produk ini. Anda bisa menambahkan field "description" pada objek produk.'
    }
  },
  watch: {
    visible(v) {
      if (v) {
        this.$nextTick(() => {
          this.$refs.panel?.focus()
          document.body.style.overflow = 'hidden'
        })
      } else {
        document.body.style.overflow = ''
      }
    }
  },
  beforeDestroy() {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.desc-overlay {
  position: fixed;
  inset: 0;
  z-index: 2100;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 60px 16px 40px;
  overflow-y: auto;
}
.desc-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.4);
  backdrop-filter: blur(2px);
}
.desc-panel {
  position: relative;
  width: 100%;
  max-width: 640px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 20px 50px -12px rgba(0,0,0,.25);
  padding: 28px 30px 24px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  outline: none;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  border: 0;
  background: #f2f2f2;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
  display:flex;
  align-items:center;
  justify-content:center;
  transition: background .15s;
}
.close-btn:hover { background:#e6e6e6; }

.desc-header {
  display: flex;
  gap: 18px;
  align-items: flex-start;
  margin-bottom: 8px;
}
.desc-image {
  width: 96px;
  height: 96px;
  object-fit: cover;
  border-radius: 10px;
  border:1px solid #eee;
  background:#fafafa;
  flex-shrink:0;
}
.desc-title-wrap { flex: 1; }
.desc-title {
  margin: 0 0 4px;
  font-size: 20px;
  font-weight: 600;
  line-height:1.2;
  color:#222;
}
.desc-sub {
  margin: 0;
  font-size: 13px;
  color:#777;
}

.desc-body {
  padding-top: 12px;
  flex: 1;
}
.desc-section-title {
  margin:0 0 8px;
  font-size:14px;
  letter-spacing:.5px;
  text-transform:uppercase;
  font-weight:600;
  color:#444;
}
.desc-text {
  margin:0 0 16px;
  font-size:14px;
  line-height:1.55;
  color:#444;
  white-space:pre-line;
}

.tags { display:flex; flex-wrap:wrap; gap:6px; }
.tag {
  font-size:11px;
  background:#f0f4f8;
  color:#334;
  padding:4px 8px;
  border-radius:20px;
  line-height:1;
}

.desc-footer {
  margin-top:8px;
}

.desc-fade-enter-active,
.desc-fade-leave-active {
  transition: opacity .25s;
}
.desc-fade-enter-from,
.desc-fade-leave-to {
  opacity:0;
}

@media (max-width:600px){
  .desc-panel {
    padding:24px 22px 20px;
    max-width:520px;
  }
  .desc-header { flex-direction:row; }
  .desc-title { font-size:18px; }
}
</style>
```