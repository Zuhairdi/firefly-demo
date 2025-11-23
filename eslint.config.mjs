import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  nuxt: true,
  typescript: true,
  ignores: [
    '.nuxt/**',
    '.output/**',
    'node_modules/**',
  ],
  rules: {
    'vue/component-tags-order': ['error', { order: ['template', 'script', 'style'] }],
  },
})
