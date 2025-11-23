<template>
  <div class="firefly-field">
    <div
      v-for="fly in fireflies"
      :key="fly.id"
      class="firefly"
      :style="{
        top: `${fly.y}%`,
        left: `${fly.x}%`,
        '--tx': `${fly.tx}px`,
        '--ty': `${fly.ty}px`,
        '--duration': `${fly.duration}s`,
        '--delay': `${fly.delay}s`,
        '--opacity': fly.opacity.toString(),
        '--size': `${fly.size}px`,
        '--glow': props.color,
      }"
    />
  </div>
</template>

<script setup lang="ts">
// Props control spawn band, color, and counts for desktop/mobile
const props = withDefaults(defineProps<{
  bandHeight?: number
  color?: string
  count?: number
  mobileCount?: number
}>(), {
  bandHeight: 20,
  color: '#ffd86b',
  count: 40,
  mobileCount: 10,
})

interface Firefly {
  id: number
  tx: number
  ty: number
  duration: number
  delay: number
  opacity: number
  size: number
  x: number
  y: number
}

// Tracks if viewport is mobile-sized
const isMobile = ref(false)

if (import.meta.client) {
  // Syncs media query match into the ref
  let mq: MediaQueryList | null = null
  const syncMatch = () => {
    isMobile.value = mq?.matches ?? false
  }
  onMounted(() => {
    mq = window.matchMedia('(max-width: 640px)')
    syncMatch()
    if (mq.addEventListener) {
      mq.addEventListener('change', syncMatch)
    }
    else {
      mq.onchange = syncMatch
    }
  })
  onBeforeUnmount(() => {
    if (!mq)
      return
    if (mq.removeEventListener) {
      mq.removeEventListener('change', syncMatch)
    }
    else {
      mq.onchange = null
    }
  })
}

// Generates the fireflies array based on device size and props
const fireflies = computed<Firefly[]>(() => {
  const count = isMobile.value ? props.mobileCount : props.count
  const band = Math.min(Math.max(props.bandHeight, 0), 100) // clamp 0-100

  return Array.from({ length: count }, (_, i) => {
    const tx = (Math.random() - 0.5) * 1200 // horizontal wander distance
    const ty = (Math.random() - 0.5) * 800 // vertical wander distance
    const y = 100 - band + Math.random() * band // start within bottom band
    const x = Math.random() * 100 // initial horizontal position (percent)

    return {
      id: i,
      tx,
      ty,
      x,
      y,
      duration: 12 + Math.random() * 10, // 12-22s
      delay: -Math.random() * 20, // negative to desync animations
      opacity: 0.4 + Math.random() * 0.6,
      size: 2 + Math.random() * 4, // 2-6px
    }
  })
})
</script>
