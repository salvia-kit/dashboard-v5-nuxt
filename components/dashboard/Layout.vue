<template>
  <dashboard-provider>
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
  </dashboard-provider>
</template>

<script>
import Overlay from './provider/Overlay.vue'
import DashboardProvider from './provider/Provider'
import TopNavigation from './topnavigation/Index.vue'
import SideNavigation from './sidenavigation/Index.vue'

export default {
  name: 'DashboardLayout',
  components: { DashboardProvider, Overlay, SideNavigation, TopNavigation },
}
</script>
