import Vue from 'vue';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';
import App from './App.vue';
import vuetify from './plugins/vuetify';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyAxKuJWOs4tlCzEDdwtqRzJhzx9KMDUK6Q',
  authDomain: 'vue-calendar-7ce19.firebaseapp.com',
  databaseURL: 'https://vue-calendar-7ce19.firebaseio.com',
  projectId: 'vue-calendar-7ce19',
  storageBucket: 'vue-calendar-7ce19.appspot.com',
  messagingSenderId: '119808320354',
  appId: '1:119808320354:web:a373b1366b3ede35c3423b'
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
