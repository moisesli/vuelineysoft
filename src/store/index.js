import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    plantilla: false
  },
  mutations: {
    generaPlantilla(state, plantilla) {
      state.plantilla = plantilla;
    }
  },
  actions: {
  },
  modules: {
  }
})
