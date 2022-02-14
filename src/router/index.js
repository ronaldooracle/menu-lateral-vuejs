import Vue from "vue";
import VueRouter from "vue-router";
import VueCookies from 'vue-cookies'
import main from "./Main";


Vue.use(VueRouter);
Vue.use(VueCookies);


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [main],
});

export default router;
