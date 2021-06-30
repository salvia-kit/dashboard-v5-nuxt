export const state = () => ({
  open: false,
})

export const mutations = {
  toggle(state) {
    state.open = !state.open
  },
}
