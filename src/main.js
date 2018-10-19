import Vue from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq'

import './../node_modules/bulma/css/bulma.css';

import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: {
    mobile: 768,
    tablet: 1023,
    laptop: 1215,
    desktop: Infinity,
  }
})

new Vue({
  render: h => h(App)
}).$mount('#app')

