<template>
  <v-app>
    
<!--    <router-link to="/">Web</router-link>-->
<!--    <router-link to="/documentos">Documentos</router-link>-->
<!--    <router-link to="/login">Login</router-link>-->
<!--    <router-link to="/registro">Registro</router-link>-->

    <template v-if="plantilla == 'web'">
      plantilla web
      <router-view></router-view>
    </template>

    <template v-if="plantilla == 'auth'">
      <router-view></router-view>
    </template>

    <template v-if="plantilla == 'dashboard'">
      <drawer></drawer>
      <navbar></navbar>
      <v-content>
        <router-view></router-view>
      </v-content>
      <footerr></footerr>
    </template>


  </v-app>
</template>

<script>
import Drawer from "./components/layout/Drawer";
import Navbar from "./components/layout/Navbar";
import Footerr from "./components/layout/Footer"
import store from './store'

export default {
  name: 'App',
  components: {
    Drawer,
    Navbar,
    Footerr
  },
  data: () => ({

  }),
  computed: {
    plantilla(){
      return store.state.plantilla;
    }
  }
};
</script>
