import Vue from "vue";
import VueRouter from "vue-router";
import Posts from "../views/Posts.vue";
import Profile from "../views/Profile.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
