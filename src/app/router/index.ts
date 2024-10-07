import BidsView from "@/bids/views/BidsView.vue";
import LoginView from "@/login/views/LoginView.vue";
import { createRouter, createWebHistory } from "vue-router";
import store from "@/app/store/index";
import { LOGIN_STORE } from "@/login/store/constants";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: BidsView,
			meta: {
				auth: true,
			},
		},
		{
			path: "/login",
			name: "login",
			component: LoginView,
		},
		{
			path: "/login",
			name: "login",
			component: LoginView,
		},
	],
});

router.beforeEach((to, from, next) => {
	const requireAuth = to.meta.auth;
	if (requireAuth && store.getters[LOGIN_STORE.GETTERS.IS_AUTHENTICATED]) {
		next();
	} else if (
		requireAuth &&
		!store.getters[LOGIN_STORE.GETTERS.IS_AUTHENTICATED]
	) {
		next("/login");
	} else {
		next();
	}
});

export default router;
