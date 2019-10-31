<template>
  <v-navigation-drawer class="blue lighten-5" v-model="drawer" app>

    <v-list class="pa-0">
      
      <v-list-tile avatar tag="div">
        
        <v-list-tile-avatar>
          <img src="../../assets/avatar0.png">
        </v-list-tile-avatar>
        <!-- <v-list-tile-content>
          <v-list-tile-title>{{user.firstName}}{{user.lastName}}</v-list-tile-title>
        </v-list-tile-content>
        <v-spacer></v-spacer>
        <v-list-tile-action style="min-width:30px;">
          <v-menu bottom right offset-y origin="bottom right" transition="v-slide-y-transition">
            <v-btn icon light slot="activator">
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile v-for="item in userMenus" :key="item.title" value="true" :to="item.link" router>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

        </v-list-tile-action>
        <v-list-tile-action style="min-width:30px;">
          <v-btn icon @click.native.stop="mini = !mini">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-list-tile-action> -->

      </v-list-tile>

    </v-list>


    <v-list dense>
      <v-list-item @click="">
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="">
        <v-list-item-action>
          <v-icon>mdi-contact-mail</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Contact</v-list-item-title>
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
  }
</script>
