<template>
  <pre
    class="
      font-mono
      text-sm
      px-4
      py-1
      rounded
      overflow-x-auto
      max-w-full
      bg-gray-100
      text-blue-600
      border
    "
  >
    {{ snippets }}
  </pre>
</template>

<script>
export default {
  name: 'Snippet',
  data() {
    return {
      snippets: `<sidenav-item title="Home" to="/">
      <home-icon />
    </sidenav-item>

    <sidenav-item title="Status" to="/admin/status">
      <status-icon />
    </sidenav-item>`,
    }
  },
}
</script>
