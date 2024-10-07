import type {
	AugmentedActionContext,
	LoginPayload,
} from "@/login/models/login.types";
import type { LOGIN_STORE } from "@/login/store/constants";

export interface LoginStateTypes {
	accessToken: string | null;
}

export interface LoginGettersTypes {
	[LOGIN_STORE.GETTERS.LOGIN_VALUE](state: LoginStateTypes): string | null;
	[LOGIN_STORE.GETTERS.IS_AUTHENTICATED](state: LoginStateTypes): boolean;
}

export interface LoginActionsTypes {
	[LOGIN_STORE.ACTIONS.CALL_LOGIN](
		{ commit }: AugmentedActionContext,
		payload: LoginPayload
	): void;
}
