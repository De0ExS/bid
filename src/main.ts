import "./app/assets/main.css";

import { createApp } from "vue";
import App from "./app/App.vue";
import router from "./app/router";
import store from "./app/store";

const app = createApp(App);

app.use(router).use(store);

app.mount("#app");
