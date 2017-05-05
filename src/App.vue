<template>
  <div id="app">
    <div class="row">
      <nav-bar></nav-bar>
    </div>
    <div class="container">
    
      <div class="row"> 
        <router-view></router-view>
      </div>
      
    </div>
    
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue';

export default {
  name: 'app',
  components: {
    NavBar
    }
}
</script>


