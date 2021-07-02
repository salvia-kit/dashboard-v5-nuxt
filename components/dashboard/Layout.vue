<template>
  <div class="bg-gray-100 h-screen overflow-hidden relative">
    <div class="flex items-start">
      <Overlay />
      <side-navigation mobile-position="right" />
      <div class="flex flex-col h-screen pl-0 w-full lg:pl-24 lg:space-y-4">
        <TopNavigation />
        <main class="h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 lg:px-4">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Overlay from './Overlay.vue'
import TopNavigation from './topnavigation/Index.vue'
import SideNavigation from './sidenavigation/Index.vue'

export default {
  name: 'DashboardLayout',
  components: { Overlay, SideNavigation, TopNavigation },
  watch: {
    $route() {
      // close sidenav when you click on a sidenav item or on route change. it's triggered when viewport is less than 1024px
      // set the html tag overflow to hidden
      if (window.innerWidth < 1024) {
        this.toggle()
        document.documentElement.style.overflow = 'hidden'
      }
    },
  },
  methods: {
    toggle() {
      this.$store.commit('dashboard/toggle')
    },
  },
}
</script>
