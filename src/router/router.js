import VueRouter from "vue-router";

import TheLogin from "@/pages/TheLogin";
import TheDashboard from "@/pages/TheDashboard";
import TheArticle from "@/pages/TheArticle";

const routes = [
  {
    path: "/login",
    name: "login",
    component: TheLogin,
  },
  {
    path: "/dashboard",
    component: TheDashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/articles",
    component: TheArticle,
  },
];

const router = new VueRouter({
  routes,
});

// Global navigation guard
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // these routes are required authentication

    // check if logged in (check with store state)
    if (!localStorage.getItem("token")) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    // these routes are not required authentication

    // if the user is authenticated and go to login page

    if (to.name === "login" && localStorage.getItem("token")) {
      next({
        path: "/dashboard",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  }
});

export default router;
