import Vue from "vue";
import App from "./App.vue";
import { Tab, Tabs, List, Cell } from "vant";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(List);
Vue.use(Cell);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
