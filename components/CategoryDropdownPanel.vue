<template>
  <transition
    name="cat-slide"
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @leave="onLeave"
    @after-leave="onAfterLeave"
  >
    <div
      v-if="visible"
      class="cat-panel"
      ref="panel"
      role="region"
      aria-label="Kategori"
      @keydown.esc.prevent="$emit('close')"
    >
      <div class="cat-panel__inner">
        <!-- Reuse CategorySlider sementara -->
        <CategorySlider v-if="useSlider" />
        <!-- Versi grid (opsional) -->
        <div v-else class="cat-grid">
          <button
            v-for="c in categories"
            :key="c.id || c.slug || c.name"
            class="cat-item"
            @click="$emit('select', c)"
          >
            <img v-if="c.icon" :src="c.icon" :alt="c.name" />
            <span>{{ c.name }}</span>
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import CategorySlider from '~/components/CategorySlider.vue'

export default {
  name: 'CategoryDropdownPanel',
  components: { CategorySlider },
  props: {
    visible: Boolean,
    categories: { type: Array, default: () => [] },
    useSlider: { type: Boolean, default: true }
  },
  mounted() {
    document.addEventListener('mousedown', this.handleOutside)
  },
  beforeDestroy() {
    document.removeEventListener('mousedown', this.handleOutside)
  },
  methods: {
    handleOutside(e) {
      if (!this.visible) return
      if (!this.$refs.panel) return
      if (!this.$refs.panel.contains(e.target)) {
        this.$emit('close')
      }
    },
    onEnter(el) {
      el.style.height = '0px'
      const h = el.scrollHeight
      requestAnimationFrame(() => {
        el.style.height = h + 'px'
      })
    },
    onAfterEnter(el) {
      el.style.height = 'auto'
    },
    onLeave(el) {
      el.style.height = el.scrollHeight + 'px'
      requestAnimationFrame(() => {
        el.style.height = '0px'
      })
    },
    onAfterLeave(el) {
      el.style.height = '0px'
    }
  }
}
</script>

<style scoped>
.cat-panel {
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background: #fff;
  z-index: 1050;
  border-bottom: 1px solid #eee;
  box-shadow: 0 6px 24px -4px rgba(0,0,0,.12);
  overflow: hidden;
}

.cat-panel__inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 20px 20px 28px;
}

.cat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 14px 28px;
}
.cat-item {
  background: none;
  border: 0;
  text-align: left;
  padding: 6px 0;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  gap: 10px;
  align-items: center;
  color: #333;
  border-radius: 6px;
}
.cat-item:hover {
  background: #f6f8fa;
}
.cat-item img {
  width: 34px;
  height: 34px;
  object-fit: contain;
}

.cat-slide-enter-active,
.cat-slide-leave-active {
  transition: height .28s cubic-bezier(.4,0,.2,1), opacity .25s;
}
.cat-slide-enter-from,
.cat-slide-leave-to {
  opacity: 0;
}
</style>
```