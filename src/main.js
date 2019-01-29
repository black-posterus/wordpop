// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import animate from 'animate.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'



Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(animate)
Vue.use(ElementUI)

new Vue({
  el: '#app',
  render:h => h(App),
  router,
  components: { App },
  template: '<App/>'
})
