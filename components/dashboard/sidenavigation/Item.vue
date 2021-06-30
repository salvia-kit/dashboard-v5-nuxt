<template>
  <li>
    <router-link :to="to">
      <span
        class="flex items-center justify-start my-2 p-4 w-full hover:text-white"
        :class="
          $route.path === to
            ? 'font-medium text-green-400 hover:text-green-400'
            : 'text-white'
        "
      >
        <span><slot /></span>
        <span
          class="mx-4 text-sm"
          :class="
            open
              ? 'lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto'
              : 'lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all'
          "
        >
          {{ title }}
        </span>
      </span>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'SidenavItem',
  props: {
    to: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    open() {
      return this.$store.state.dashboard.open
    },
  },
}
</script>
