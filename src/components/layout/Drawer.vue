<template>
  <v-navigation-drawer class="blue lighten-5" v-model="drawer" app>
    <v-list class="pa-0">
      <v-list-item>

        <v-list-item-avatar>
          <v-img src="../../assets/avatar0.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Moises</v-list-item-title>

        <v-btn icon>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

      </v-list-item>
    </v-list>


    <v-list dense>

      <!-- Documentos -->
      <v-list-item @click>
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Documentos</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Productos -->
      <v-list-item @click>
        <v-list-item-action>
          <v-icon>mdi-contact-mail</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Productos</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Proveedores -->
      <v-list-item @click>
        <v-list-item-action>
          <v-icon>mdi-contact-mail</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Proveedores</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Categorias -->
      <v-list-item @click>
        <v-list-item-action>
          <v-icon>mdi-contact-mail</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Categorias</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-list>

  </v-navigation-drawer>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    })
  };
</script>
