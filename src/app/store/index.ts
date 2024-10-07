import { createStore } from "vuex";

import root from "@/app/store/modules";
import type { IRootState } from "@/app/models/interfaces";
import type { RootStoreModuleType } from "@/app/models/modules";
import type { LoginStoreModuleTypes } from "@/login/models/modules";

const store = createStore<IRootState>(root);

type StoreModules = {
	loginModule: LoginStoreModuleTypes;
	root: RootStoreModuleType;
};

export type Store = LoginStoreModuleTypes<Pick<StoreModules, "loginModule">> &
	RootStoreModuleType<Pick<StoreModules, "root">>;

export default store;
