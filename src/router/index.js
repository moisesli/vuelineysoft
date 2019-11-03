import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Documentos from '../components/documentos/Documentos'
import Login from '../components/auth/Login'
import Registro from '../components/auth/Registro'
import Web from '../components/web/Web'
import firebase from 'firebase'

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

  let usuario = firebase.auth().currentUser;

  let web = to.matched.some(record => record.meta.web);
  let auth = to.matched.some(record => record.meta.auth);
  let dashboard = to.matched.some(record => record.meta.dashboard);

  console.log(!!usuario)
  if (web == true) {
    // Cualquiera puede tener acceso a la web registrado o no
    store.commit('generaPlantilla','web')
    next()
  }else if (auth == true && !!usuario == false) {
    // si entra a auth y no esta autenticado puede entrar, si esta autenticado
    // y entra a login no entrara
    store.commit('generaPlantilla','auth')
    next()
  } else if(auth == true && !!usuario == true){
    // Si entra a auth y esta autenticado le redireccionara a home 
    store.commit('generaPlantilla','dashboard')
    next('/documentos')
  }
  else if (dashboard == true && !!usuario == true) {
    // Si entra a cualquier ruta del admin y autenticado
    store.commit('generaPlantilla','dashboard')
    next()
  } else{
    // si no esta autenticado y entra al dashboard se va a login
    next('/login')
  }
  

})

export default router
