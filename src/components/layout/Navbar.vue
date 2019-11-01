<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Facturacion Electronica</v-toolbar-title>
  </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    })
  }
</script>
