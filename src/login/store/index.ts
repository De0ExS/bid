import type { IRootState } from "@/app/models/interfaces";
import type { LoginStateTypes } from "@/login/models/login.interfaces";
import type { Module } from "vuex/types/index.js";
import { state } from "./state";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

const login: Module<LoginStateTypes, IRootState> = {
	state,
	getters,
	mutations,
	actions,
};

export default login;
