import type { IRootState } from "@/app/models/interfaces";
import type {
	LoginGettersTypes,
	LoginStateTypes,
} from "@/login/models/login.interfaces";
import { LOGIN_STORE } from "@/login/store/constants";
import type { GetterTree } from "vuex/types/index.js";

export const getters: GetterTree<LoginStateTypes, IRootState> &
	LoginGettersTypes = {
	[LOGIN_STORE.GETTERS.LOGIN_VALUE]: (state: LoginStateTypes) => {
		return state.accessToken || null;
	},
	[LOGIN_STORE.GETTERS.IS_AUTHENTICATED]: (state: LoginStateTypes) => {
		return !!state.accessToken;
	},
};
