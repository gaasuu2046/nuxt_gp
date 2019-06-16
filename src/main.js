// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

const config = {
  apiKey: 'AIzaSyDXNkTbFPpq-rQdhTBkHJXujpgfrkZoMjw',
  authDomain: 'nuxt-go-74247.firebaseapp.com',
  databaseURL: 'https://nuxt-go-74247.firebaseio.com',
  projectId: 'nuxt-go-74247',
  storageBucket: 'nuxt-go-74247.appspot.com',
  messagingSenderId: '609332021174',
  appId: '1:609332021174:web:2a1a719d7d23abbd'
}
firebase.initializeApp(config)
