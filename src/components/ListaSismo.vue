<template>
  <div class="hello">
    <div class="row card-panel lime lighten-4" v-for="sismo in sismos"  >
      <sismo :sismo="sismo" ></sismo>
    </div>
  </div>
</template>

<script>

import Sismo from '@/components/Sismo'

export default {
  name: 'lista-sismo',
  data () {
    return {
      sismos: []
    }
  },
  methods : {
    mapTemblor (temblor) {
       return {
        magnitud : temblor.magnitud,
        fecha_local : temblor.fecha_local,
        ubicacion: temblor.referencia_geografica,
        latitud: temblor.latitud,
        longitud: temblor.longitud
       }
      
    }
  },
  created () {
    this.$http.get("http://138.122.227.58/publico/sismologiacl").
      then(resp => this.sismos= resp.body.map( this.mapTemblor));
    setInterval( () =>
    this.$http.get("http://138.122.227.58/publico/sismologiacl").
      then(resp => this.sismos= resp.body.map(this.mapTemblor))
      , 5*60*1000);
  },
  components : {
    Sismo
  }
}
</script>


