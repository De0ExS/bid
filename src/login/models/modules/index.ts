import type {
	LoginActionsTypes,
	LoginGettersTypes,
	LoginStateTypes,
} from "@/login/models/login.interfaces";
import type { LoginMutationsTypes } from "@/login/models/login.types";
import { Store as VuexStore, CommitOptions, DispatchOptions } from "vuex";

export type LoginStoreModuleTypes<S = LoginStateTypes> = Omit<
	VuexStore<S>,
	"commit" | "getters" | "dispatch"
> & {
	commit<
		K extends keyof LoginMutationsTypes,
		P extends Parameters<LoginMutationsTypes[K]>[1]
	>(
		key: K,
		payload?: P,
		options?: CommitOptions
	): ReturnType<LoginMutationsTypes[K]>;
} & {
	getters: { [K in keyof LoginActionsTypes]: ReturnType<LoginActionsTypes[K]> };
} & {
	dispatch<K extends keyof LoginActionsTypes>(
		key: K,
		payload?: Parameters<LoginActionsTypes[K]>[1],
		options?: DispatchOptions
	): ReturnType<LoginActionsTypes[K]>;
};
