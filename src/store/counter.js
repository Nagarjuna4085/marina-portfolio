export default {
  namespaced: true, // important for multiple stores
  state() {
    return { count: 0 }
  },
  mutations: {
    increment(state) { state.count++ },
    decrement(state) { state.count-- }
  },
  getters: {
    doubleCount(state) { return state.count * 2 }
  }
}
