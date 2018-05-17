// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;

/*使用ElementUI插件*/
Vue.use(ElementUI);
/*使用VueResource插件*/
Vue.use(VueResource);
/*使用Vuex插件*/
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
