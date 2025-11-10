// src/store/user.js
export default {
  namespaced: true,
  state() {
    return { 
      name: '', 
      loggedIn: false 
    }
  },
  mutations: {
    login(state, name) {
      state.name = name
      state.loggedIn = true
    },
    logout(state) {
      state.name = ''
      state.loggedIn = false
    }
  },
  getters: {
    welcomeMessage(state) {
      return state.loggedIn ? `Welcome, ${state.name}` : 'Please log in'
    }
  },
  actions: {
    async loginAsync({ commit }, { name }) {
      // simulate async login (e.g., API call)
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('login', name)
          resolve()
        }, 500)
      })
    }
  }
}
