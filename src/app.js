import Vue from 'vue'
import App from './App.vue'
import VueComposer from './main.js'

Vue.config.productionTip = false

Vue.use(VueComposer)

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount("#app")
