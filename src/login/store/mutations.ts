import type { LoginStateTypes } from "@/login/models/login.interfaces";
import type { LoginMutationsTypes } from "@/login/models/login.types";
import { LOGIN_STORE } from "@/login/store/constants";
import type { MutationTree } from "vuex/types/index.js";

export const mutations: MutationTree<LoginStateTypes> & LoginMutationsTypes = {
	[LOGIN_STORE.MUTATIONS.SET_LOGIN](state: LoginStateTypes, payload: string) {
		localStorage.setItem("access-token", payload);
		state.accessToken = payload;
	},
	[LOGIN_STORE.MUTATIONS.RESET_LOGIN](state: LoginStateTypes) {
		localStorage.removeItem("access-token");
		state.accessToken = null;
	},
};
