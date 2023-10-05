import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrapMin from "bootstrap/dist/js/bootstrap.min.js";
createApp(App).use(store).use(router).use(bootstrapMin).mount("#app");
