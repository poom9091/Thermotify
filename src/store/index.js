import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    profile:{
      userID:'null',
      img:'../../assets/logo.png',
      username:'ภูบดี_กลิ่นโอชา',
    },
    sensors:[]
  },
  getters:{
    getProfile:state=>{
      return state.profile
    },
    getUserID:state=>{
      return state.profile.userID
    },
  },
  mutations: {
    Login(state){
      state.profile.userID = "NotNull"
    },
    setSensor(state,sensors){
      state.sensors = sensors
      console.log(state.sensors)
    }
  },
  actions: {
    LoginLine(context){
      context.commit('Login')
    },
    getSensor(context){
      let sensors ; 
      fetch("https://api.jsonbin.io/b/6025514987173a3d2f5bb46f/4",{
        method:'GET',
        headers:{
          "secret-key":"$2b$10$FZ.I5GIIKQIky3cz9CvNJuasIi2if1Khc6aFb3sX7qtJDtxSlhsEq"
        }
      })
      .then(response => response.json())
      .then(data => {
              sensors = data
              console.log(sensors)
              context.commit('setSensor',sensors)
            });
    }
  },
  modules: {
  }
})
