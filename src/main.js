import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

// Vue.config.productionTip = false;
app.config.productionTip = false;

/*
new Vue({
  render: (h) => h(App),
}).$mount("#app");
*/
app.mount("#mainApp");
