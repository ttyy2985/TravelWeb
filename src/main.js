import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SvgIcon from "@/components/SvgIcon.vue";
import "@/assets/tailwind.css";
import "@/assets/twicon.css";

Vue.config.productionTip = false;
Vue.component("icon", SvgIcon);
const requireAll = (requireContext) => requireContext.keys().map(requireContext);
const req = require.context("@/assets/images", true, /\.svg$/);
requireAll(req);

new Vue({
  router,
  store,
  render: (h) => h(App),
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  mounted() {
    const vm = this;
    window.addEventListener("resize", function () {
      vm.windowWidth = window.innerWidth;
    });
  },
}).$mount("#app");
