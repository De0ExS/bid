import type { IRootState } from "@/app/models/interfaces";
import type { LoginStateTypes } from "@/login/models/login.interfaces";
import type { LOGIN_STORE } from "@/login/store/constants";
import type { ActionContext } from "vuex/types/index.js";

export type LoginPayload = {
	email: string;
	password: string;
};

export type LoginResponse = {
	idToken: string;
};

export type LoginMutationsTypes<S = LoginStateTypes> = {
	[LOGIN_STORE.MUTATIONS.SET_LOGIN](state: S, payload: string): void;
	[LOGIN_STORE.MUTATIONS.RESET_LOGIN](state: S): void;
};

export type AugmentedActionContext = {
	commit<K extends keyof LoginMutationsTypes>(
		key: K,
		payload: Parameters<LoginMutationsTypes[K]>[1]
	): ReturnType<LoginMutationsTypes[K]>;
} & Omit<ActionContext<LoginStateTypes, IRootState>, "commit">;
