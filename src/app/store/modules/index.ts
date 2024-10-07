import type { IRootState } from "@/app/models/interfaces";
import type { Module, ModuleTree } from "vuex/types/index.js";
import { state } from "./state";

const modules: ModuleTree<IRootState> = {};
const root: Module<IRootState, IRootState> = {
	state,
	modules,
};

export default root;
