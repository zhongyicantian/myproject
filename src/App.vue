<template>
  <div id="app">
    <daoHangLan></daoHangLan>
     <router-view/>
    
  </div>
</template>

<script>
import vuetext from './components/text'
import daoHangLan from './components/daoHangLan'
import kongzhitiao from './components/kongzhitiao'
export default {
  name: 'App',
  components:{
    vuetext,
    daoHangLan,
    kongzhitiao
  },
  data(){
    return{
    
    }
  },
  created(){
     fetch('./src/components/data/data.json')
    .then(res =>{ 
      return res.json()
    })
    .then(data1 =>{
      console.log(data1)
    })
  },
  methods: {
   disable(){
      this.welcome ='';
    }
  },

}
</script>

<style>
.welcome{
  display: block;
  width: 100vw;
  height: 100vh;
}
#welcomeTest{
  font-family: Helvetica;
  font-size: 40px;
  color: #000;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
