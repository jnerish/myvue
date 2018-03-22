import Vue from 'vue'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import RouterConfig from './router.config.js'

Vue.use(ElementUI);
Vue.use(VueRouter);
	//生成路由实例
const router=new VueRouter({
	mode:'history',
	routes:RouterConfig
});

new Vue({	
  el: '#app',
  router,
  render: h => h(App)
})
