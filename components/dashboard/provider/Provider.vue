<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DashboardProvider',
  provide() {
    const state = {}
    Object.defineProperty(state, 'open', {
      enumerable: true,
      get: () => this.open,
    })

    return { state, toggle: this.toggle }
  },
  data() {
    return {
      open: false,
    }
  },
  watch: {
    $route() {
      // close sidenav when you click on a sidenav item or on route change.
      // set the html tag overflow to hidden

      document.documentElement.style.overflow = 'hidden'
      if (this.open === true) {
        this.open = false
      }
    },
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>
