// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/';
require('froala-editor/js/froala_editor.pkgd.min')

// Require Froala Editor css files.
require('froala-editor/css/froala_editor.pkgd.min.css')
require('font-awesome/css/font-awesome.css')
require('froala-editor/css/froala_style.min.css')

// Import and use Vue Froala lib.
import VueFroala from 'vue-froala-wysiwyg'
Vue.use(VueFroala)

// import BootstrapVue from 'bootstrap-vue'
// Vue.use(BootstrapVue);

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
