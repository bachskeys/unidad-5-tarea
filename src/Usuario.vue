<template>
  <b-container  fluids>
  <b-row class="text-center" align-h="center">
       <b-spinner class="spinner" v-if="loading" variant="success" type="grow" label="Spinning"></b-spinner>
  </b-row>
  <b-row class="text-center" align-h="center">
     <Tarjeta :user="user"/>
  </b-row>
  <b-row class="text-center" align-h="center">
       <b-button 
       class="button"
     @click="onClick()"
     variant="success">Button</b-button>
  </b-row>
</b-container>
</template>

<script>
import Tarjeta from './components/Tarjeta.vue'
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'Usuario',
  components: {
    Tarjeta
  },
  methods:{
    ...mapActions(['getUser']),
     onClick(){
      this.getUser();
  }
  },
  computed:{
    ...mapGetters(['user','loading'])
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.button{
  margin:50px;
}
.spinner{
  margin:50px;
}
</style>
