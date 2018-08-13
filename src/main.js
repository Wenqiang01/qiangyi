// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import VueRx from 'vue-rx'
import App from './App'
import router from './router'
import store from './store/';
// import { Subject } from 'rxjs'
// import { map, startWith, scan } from 'rxjs/operators'
// Vue.use(VueRx)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  subscriptions () {
    this.popupMessage$ = new Subject()
  },
  router,
  store,
  components: { App },
  template: '<App/>'
})
