import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import Documentos from '../components/documentos/Documentos'
import Login from '../components/auth/Login'
import Registro from '../components/auth/Registro'
import Web from '../components/web/Web'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'web',
    component: Web,
    meta: {
      web: true
    }
  },
  {
    path: '/documentos',
    name: 'documentos',
    component: Documentos,
    meta: {
      dashboard: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      auth: true
    }
  },
  {
    path: '/registro',
    name: 'registro',
    component: Registro,
    meta: {
      auth: true
    }
  },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {

  let web = to.matched.some(record => record.meta.web);
  let auth = to.matched.some(record => record.meta.auth);
  let dashboard = to.matched.some(record => record.meta.dashboard);

  // console.log(to)

  if (web == true) {
    store.commit('generaPlantilla','web')
  }

  if (auth == true) {
    store.commit('generaPlantilla','auth')
  }

  if (dashboard == true) {
    store.commit('generaPlantilla','dashboard')
  }

  next()

})

export default router
