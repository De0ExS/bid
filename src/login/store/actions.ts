import type { IRootState } from "@/app/models/interfaces";
import type {
	LoginActionsTypes,
	LoginStateTypes,
} from "@/login/models/login.interfaces";
import { LOGIN_STORE } from "@/login/store/constants";
import type { ActionTree } from "vuex/types/index.js";
import type { LoginPayload } from "../models/login.types";
import { loginWithEmailAndPassword } from "@/login/services/login.service";

export const actions: ActionTree<LoginStateTypes, IRootState> &
	LoginActionsTypes = {
	async [LOGIN_STORE.ACTIONS.CALL_LOGIN]({ commit }, payload: LoginPayload) {
		const resposne = await loginWithEmailAndPassword(payload);
		commit(LOGIN_STORE.MUTATIONS.SET_LOGIN, resposne.idToken);
	},
};
