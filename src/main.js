import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAp7gaA9NwyVKR8IplJk3n1oHjB4kVZpXU",
  authDomain: "lineysoft.firebaseapp.com",
  databaseURL: "https://lineysoft.firebaseio.com",
  projectId: "firebase-lineysoft",
  storageBucket: "firebase-lineysoft.appspot.com",
  messagingSenderId: "89175636200",
  appId: "1:89175636200:web:eb381a7206faf1ca"
};
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function (user) {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})
