import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
import VueLazyload from 'vue-lazyload'

// Vue.use(ElementUI);
Vue.use(VueLazyload,{
 
  loading:require('./statics/site/images/01.gif')
})

//现在按需导入所需要的elementUI
import {Button,Pagination,Input,InputNumber,Switch,Form,FormItem,Radio,RadioGroup,MessageBox,Message,Carousel,CarouselItem,Row,Col} from 'element-ui';

Vue.use(Button);
Vue.use(Pagination);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Switch);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(MessageBox);
Vue.use(Message);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Row);
Vue.use(Col);

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;

//导入全局样式
// import 'element-ui/lib/theme-chalk/index.css';
import "./statics/site/css/style.css"

Vue.config.productionTip = false

//导入过滤器
import './filters/index.js'

//导入路由对象(如果一个文件夹下有一个文件叫index.js,可以只写到文件夹)
import router from './router/index.js'
// console.log(router);
import store from './store/index.js'

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


