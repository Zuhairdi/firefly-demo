# Fairy Fireflies (Nuxt 4)

A tiny Nuxt 4 demo that renders animated fireflies you can drop onto any page or background.

## Requirements
- Node 18.18+ (tested with Node 20.x)
- npm 9+ (or any package manager you prefer)
- Nuxt ^4.2.1

## Quick start
```bash
npm install
npm run dev
# visit http://localhost:3000
```

## Using the FireflyField component
`app/components/FireflyField.vue` is auto-imported by Nuxt. Drop it into any layout/container:

```vue
<template>
  <section class="hero">
    <FireflyField
      :bandHeight="25"   <!-- spawn in bottom 25% -->
      color="#7af0ff"    <!-- glow color -->
      :count="40"        <!-- desktop/tablet count -->
      :mobileCount="10"  <!-- mobile count -->
    />
    <div class="content">Your content here</div>
  </section>
</template>
```

Props:
- `bandHeight` (number, default 20): spawn band height from the bottom (% of container).
- `color` (string, default `#ffd86b`): base glow color.
- `count` (number, default 40): number of fireflies on desktop/tablet.
- `mobileCount` (number, default 10): number of fireflies on <=640px viewports.

The component fills its parent (`width: 100%; height: 100%; position: relative;`). Ensure the parent sets a height (e.g., `100vh` or a fixed value). Safari fallbacks are built in for `matchMedia` and `color-mix`.

## Production
```bash
npm run build
npm run preview
```
