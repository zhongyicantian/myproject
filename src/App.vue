<template>
  <div id="app" >
    <daoHangLan :func='get'></daoHangLan>
     <router-view />
    
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
      daymode:'',
    }
  },
  methods: {
   disable(){
      this.welcome ='';
    },
    get(data){
    console.log(data)
  },
  },
 

}
</script>

<style>
.darkmode{
  color:#fff;
}
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
