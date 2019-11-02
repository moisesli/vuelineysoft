<template>
  <v-container fluid>
    <v-flex xs12 class="pa-5">
      <v-data-table>

      </v-data-table>
      <tabla></tabla>
    </v-flex>
  </v-container>
</template>

<script>
  import Tabla from '../documentos/Table'
  export default {
    data () {
      return {
      }
    },
    components:{
      Tabla
    }
  }
</script>
