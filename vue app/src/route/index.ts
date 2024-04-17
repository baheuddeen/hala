import { createWebHistory, createRouter } from "vue-router";
import LandingPage from "../components/LandingPage.vue";
import RequestsReport from "../components/requestsReport/requestsReports.vue"
import InitSourceReport from "../components/initSourceReport/InitSource.vue"
import signinSignup from "../components/SigninPage/SigninForm.vue"
import User from "../models/User";

const routes = [
  {
    path: "/",
    name: "LadinPage",
    component: LandingPage,
  },
  {
    path: "/requestsReport",
    name: "requestsReport",
    component: RequestsReport,
    meta: {
      requiresAuth: true 
    }
  },
  {
    path: "/initSourceReport",
    name: "InitSourceReport",
    component: InitSourceReport,
    meta: {
      requiresAuth: true 
    },
  },
  {
		path: "/sign-in",
		name: "Signin-signup",
		component: signinSignup,
	},
];

const router = createRouter({
  history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
  to.matched.some((record) => {
    if (record.meta.requiresAuth) {
      if (!User.isLoggedIn) {
        next({
          path: '/sign-in',
          query: { redirect: to.fullPath }
        });
      } else {
        next();
      }
    } else {
      next();
    }
  });
});

export default router;
