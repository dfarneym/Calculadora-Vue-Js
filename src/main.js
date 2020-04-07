import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// Token incorporado para qualquer requisição que o axios fizer
// TEMPORARIO!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkRhbmllbCBGYXJuZXkgTS4gTW9yZWlyYSIsImVtYWlsIjoiZl9mYXJuZXlAaG90bWFpbC5jb20iLCJhZG1pbiI6InRydWUiLCJpYXQiOjE1ODYyMTIzMDgsImV4cCI6MTU4NjQ3MTUwOH0.sK4BCIjzf7nl0Xj4Mh7kHjNgMqoEV6IYfajDaDffMG8'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')