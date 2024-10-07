import type { LoginStateTypes } from "@/login/models/login.interfaces";

export const state: LoginStateTypes = {
	accessToken: localStorage.getItem("access-token"),
};
