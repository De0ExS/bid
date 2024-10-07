import type { IRootState } from "@/app/models/interfaces";
import type { Module, ModuleTree } from "vuex/types/index.js";
import { state } from "./state";
import loginModule from "@/login/store/index";

const modules: ModuleTree<IRootState> = {
	loginModule,
};
const root: Module<IRootState, IRootState> = {
	state,
	modules,
};

export default root;
