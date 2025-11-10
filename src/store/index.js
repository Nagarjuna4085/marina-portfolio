import { createStore } from 'vuex'
import counter from './counter'
import user from './user'

const store = createStore({
  modules: {
    counter,
    user
  }
})

export default store
