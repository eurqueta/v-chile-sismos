<template>
    <div >
        <div class="col s12 m8">
            <ul class="collection with-header">
                <li class="collection-header" >
                    <h4 :class="clases" >{{sismo.magnitud}}</h4>
                </li>
                <li>
                    Fecha {{sismo.fecha_local}}
                </li>
                <li>
                    Ubicación {{sismo.ubicacion}}
                </li>
                <li>
                    Latitud {{ sismo.latitud }}
                </li>
                <li>
                    Longitd {{ sismo.longitud }}
                </li>
            </ul>
        </div>
        <div class="col s12 m4">
        <mapa :latitud="sismo.latitud" :longitud="sismo.longitud" ></mapa>
        </div>
    </div>
</template>
<script>
import Mapa from './Mapa.vue';

    export default {
        name : 'sismo',
        props: ['sismo'],
        computed : {
            clases () {
                if(this.sismo.magnitud.match(/[\d+|\.]*/)[0] > 5){
                    return "red-text";
                }else {
                    return "blue-text";
                }
            }
        },
        components: {
            Mapa
        }
    }
</script>