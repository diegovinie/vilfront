// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import Dialog from './components/dialog'
import Drawer from './components/Drawer/index'
import ComponentManager from './components/ComponentManager'

import './filters'

Vue.use(Vuetify)

Vue.component('paginate', require('vuejs-paginate'))
Vue.component('Dialog', Dialog)
Vue.component('Drawer', Drawer)
Vue.component('ComponentManager', ComponentManager)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: {
    App
  },
  template: '<App/>'
})
