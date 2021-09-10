<template>
    <div>
       <ul class="topbar">
           <li>
               <div id="logo"></div>
           </li>
           <li v-for="(item,index) in list" :key="index">
               <router-link :to="item.router">
                    <div class="button" :class="{'darkmode': daymode == `黑夜模式`}" @click="select1(index)" >
                        {{item.name}}
                    </div> 
                    <div class="anibar1" :class="{'anibar': index === currentIndex,'darkmode': daymode == `黑夜模式`}" ></div>  
                </router-link> 
           </li>
           <li>
               <div>
                <label for="change"  @click="change(),send()">
                   <span  id="chan" :class="{'darkmode': daymode == `黑夜模式`}">{{ daymode }}</span> 
               </label>
               <input type="checkbox" name="" id="change" style="display:none;"> 
               </div>
           </li>
       </ul>
      
    </div>
</template>
<script>
export default {
     name:'daoHangLan',
     data(){
         return {
             currentIndex: 0,
             daymode:'白天模式',
            list:[
                {id:0,name:'主页 ^~~^ 欢迎欢迎',router:'/HelloWorld'},
                {id:1,name:'浅拷贝 ^~~^ 录入信息',router:'/vuetext'},
                {id:2,name:'节流 ^~~^ 控制条',router:'/kongzhitiao'},
            ]
         }
     },
     /*mounted:function(){
         console.log(this.daymode)
         this.$emit('func',this.daymode)
     },*/
     methods:{
         select1(index){
             this.currentIndex = index;  
         },
         change(){
             let text = document.querySelector("#chan")
             let check = document.querySelector('#change')
             let bodymode = document.body;
             if(check.checked== true){
                 this.daymode ='白天模式'
                 bodymode.classList.toggle('darkmode')
             }else{
                 this.daymode ='黑夜模式'
                 bodymode.classList.toggle('darkmode')
             }
         }, 
         send(){
             this.$emit('func',this.daymode)
         }
     }
}
</script>
<style>
.darkmode{
  background-color: rgba(0,0,0,0.4);
  color: #fff;
}
:root{
    --square:75px;
    --margin-right:7px;
    --button-width:75px;
}

#logo{
    width: var(--square);
    height: var(--square);
    background-image: url('logo.png');
    background-size: cover;
}
.topbar{
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

.button{
    width: var(--button-width);
    height: var(--square);
    border: none;
    margin-right: var(--margin-right);
    background: #fff;
    outline: none;
    text-align: center;
    letter-spacing: 2px;
}
.button.darkmode{
    background-color: rgba(0,0,0,0.4);
}
a{
    text-decoration: none;
    font-family: '微雅软黑';
    color: #000;
    
}
.anibar{
    /*--align:20px;*/
    width:var(--button-width);
    position: relative;
    left: calc(var(--align) / 2);
    height: 3px;
    background:  #42B983;
}
.anibar1.darkmode,
.button:hover ~.anibar1.darkmode{
    background-color: orange;
}
.button:hover ~.anibar1{
    --align:20px;
    width:calc(var(--button-width) - var(--align));
    position: relative;
    left: calc(var(--align) / 2);
    height: 3px;
    background:  #42B983;
}

#chan{
    width: 75px;
    height: 75px;
    display: block;
}

</style>