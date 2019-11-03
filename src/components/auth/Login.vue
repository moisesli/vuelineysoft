<template>
  <v-content>
    <v-container class="fill-height" fluid >
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Entrar al Sistema</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field label="Login" v-model="usuario" name="login" type="text" prepend-icon="mdi-account">
                </v-text-field>
                <v-text-field id="password" v-model="contrasena" label="Password" name="password" prepend-icon="mdi-lock" type="password">
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" to="/documentos"><v-icon>mdi-arrow-left-thick</v-icon>Regresar</v-btn>
              <v-btn color="primary" @click="login">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>


<script>
  import firebase from 'firebase'

  export default {
    data: () => ({
      usuario: "",
      contrasena: ""
    }),
    methods: {
      login() {
        firebase.auth()
          .signInWithEmailAndPassword(this.usuario, this.contrasena)
          .then((user) => this.$router.replace('documentos'), (error) => console.log(error));
      }
    }
  };
</script>