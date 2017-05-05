<template>
    <div :id="id" style="height: 250px">   
    
    </div>
</template>
<script>
    import Leaflet from 'Leaflet';
    export default {
        props: ['latitud', 'longitud'],
        name: 'mapa',
        data() {
            return {
                id: this._uid
            }
        },
        mounted() {
            let myMap = Leaflet.map(this._uid+ "").setView([this.latitud, this.longitud], 6);
            Leaflet.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(myMap);
            let marker = Leaflet.circle([this.latitud, this.longitud],{
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 5000
            }).addTo(myMap);
        }
        
    }

</script>