<template>
  <div class="home w-12">
    <button class=" fixed top-7 right-7 text-white text-xl font-style-base "> เพิ่มกลุ่ม  </button>

    <button ref="NavBar" @click="showNavbar=true"  class=" fixed top-7 left-7 fill-current w-8 text-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
        </svg>
    </button>

    <transition name="slide-navbar">
      <NavBar v-if="showNavbar" 
        v-closable="{
          exclude: ['NavBar'],
          handler: 'onClose'
        }"
      />
    </transition>
  </div>
</template>

<script>
import NavBar from '../components/Home/NavBar.vue'
export default {
  name: 'Home',
  components: {
    NavBar
  },
  data(){
    return{
      showNavbar:false
    }
  },
  methods:{
    onClose(){
      this.showNavbar=false
    }
  },
  created(){
    let userID = this.$store.getters.getUserID
    console.log(userID)
    if(userID == 'null'){
      this.$router.push('/login')
    }
  }
  
}
</script>
<style>
  .slide-navbar-enter-active, .slide-navbar-leave-active {
  transition: opacity .3s;
  }
  .slide-navbar-enter, .slide-navbar-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }

</style>
