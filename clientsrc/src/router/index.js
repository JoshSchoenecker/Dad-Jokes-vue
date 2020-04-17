// @ts-ignore
import Vue from "vue";
// @ts-ignore
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import Profile from "../views/Profile.vue";
// @ts-ignore
import { authGuard } from "@bcwdev/auth0-vue";
// @ts-ignore
import SearchForJokes from "../views/SearchForJokes.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/jokes",
    name: "Jokes",
    // @ts-ignore
    component: () => import(/*webpackChunkName: "jokes" */'../views/Jokes.vue')
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard
  },
  {
    path: "/searchForJokes",
    name: "SearchForJokes",
    component: SearchForJokes
  }
];

const router = new VueRouter({
  routes
});

export default router;
